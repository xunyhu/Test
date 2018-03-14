$(document).ready(function() {
    var userAgent = window.navigator.userAgent;
    var isApp = userAgent.indexOf('tudouni') > -1 || userAgent.indexOf('tuoduni') > -1 || userAgent.indexOf('sa-sdk-ios') > -1;
    if (!isApp && 2<1) {
        $('.container').html(`
        <section class="top">
            <img src="https://image.tudouni.doubozhibo.com/common/h5/carnival/0309_1.jpg" alt="">
            <p>活动时间: 3月12日-3月18日</p>
        </section>
        <section class="share">
            <div class="share_friend"></div>
            <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
                <div class="share_ucenter"></div>
            </a>
        </section>
        <section class="rule">
            <div class="rule_wrap">
                <div id="wrapper">
                    <div class="scroller">
                        <ul>
                            <li>
                                <img src="https://image.tudouni.doubozhibo.com/common/h5/carnival/0309_6_2.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="rule_close"></div>
                </div>
            </div>
        </section>
        `);
        $('.share_ucenter').css({
            'background': 'url(https://image.tudouni.doubozhibo.com/common/h5/carnival/0309_cy.png) no-repeat',
            'background-size': '100%'
        });
        $('.share_friend').css({
            'background': 'url(https://image.tudouni.doubozhibo.com/common/h5/carnival/0309_lj.png) no-repeat',
            'background-size': '100%'
        }).click(function() {
            $('.rule').show();
            var myscroll;
            var wrap = document.getElementById('wrapper');
            myScroll = new IScroll(wrap, {
                scrollX: false,
                scrollY: true,
                scrollbars: false,
                resizeScrollbars: false,
                click: true
            });
            wrap.addEventListener('touchmove', function (e) { e.preventDefault(); },{
                capture: false,
                passive: false
            });
        });
    }
    //活动规则开关
    $('.explain_r_box').click(function() {
        $('.rule').show();
        var myscroll;
        var wrap = document.getElementById('wrapper');
        myScroll = new IScroll(wrap, {
            scrollX: false,
            scrollY: true,
            scrollbars: false,
            resizeScrollbars: false,
            click: true
        });
        wrap.addEventListener('touchmove', function (e) { e.preventDefault(); },{
            capture: false,
            passive: false
        });
    });
    $('.rule_close').click(function() {
        $('.rule').hide();
    });
});

function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-22px"
    },
    500,
    function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    });
}

function parseQueryString(url) {
    url = url == null ? window.location.href : url
    if(url.indexOf('?') > -1){
        var search = url.substring(url.lastIndexOf('?') + 1)
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }else{
        return {}
    }
}

//列表
//var userId = 1605;
var userId = parseQueryString().uid;
new Vue({
    el: '.container',
    data: {
        // domain: 'http://47.96.152.104:8080',
        domain: 'https://activity1.tudouni.doubozhibo.com',
        initial: 1, //默认泥壕
        donatorList: [],
        anchorList: [],
        systemMud: 0,  //系统赠泥
        iDonateMud: 0, //我捐赠的
        DonateMudToMe: 0, //我收到的捐赠
        SystemTotalMud: 0,  //我领取系统的
        userId: userId,
        tudouni: 0,   //领取到系统的土豆泥
        giveList: [],  //土豪捐赠消息,
        search_Info: {
            "tdId": '',
            "userId":  0,
            "photo": '',
            "nickname": '',
            "default": false   
        },
        donator_Info:{
            "amount": '',
            "anchorId": ''
        },
        donator_Default: true,
        isAndroid: getBrowser().mbs.android
    },
    mounted: function() {
        this.getdata();
        //滚动消息
        //setInterval('AutoScroll("#message")', 1500)
    },
    methods: {  
        greet: function (x) {  
            this.initial = x;
            x == 1 ? _czc.push(["_trackEvent", "宣传页", "泥豪榜", "点击次数"]) : _czc.push(["_trackEvent", "宣传页", "主播榜", "点击次数"]);
        },
        getdata: function() {
            var self = this;
            $.ajax({
                type: "get",
                url: self.domain + "/activity/dthDonationDetail/index?userId=" + self.userId,
                success: function(msg){
                    if (msg.errorCode == 0) {
                        self.donatorList = msg.result.donatorList;
                        self.anchorList = msg.result.anchorList;
                        self.systemMud = msg.result.systemMud;
                        self.iDonateMud = msg.result.iDonateMud;
                        self.DonateMudToMe = msg.result.DonateMudToMe;
                        self.SystemTotalMud = msg.result.getSystemTotalMud;
                    }
                }
             });
        },
        share: function() {
            function connectWebViewJavascriptBridge(callback) {
                if (window.WebViewJavascriptBridge) {
                    callback(WebViewJavascriptBridge);
                } else {
                    document.addEventListener('WebViewJavascriptBridgeReady', function () {
                        callback(WebViewJavascriptBridge)
                    }, false);
                    console.log("failed");
                }
            }
            connectWebViewJavascriptBridge(function (bridge) {
                bridgeObj = bridge;
                bridgeObj.callHandler('share', {
                    'url': 'https://h5.tudouni.doubozhibo.com/tudouni/html/getmoney_1.html',
                    'title': '土豆泥泥壕疯狂撒币，你还不速来捡币？',
                    'content': '史上最强泥壕争霸赛，福利拿到手软！',
                    'img': 'https://image.tudouni.doubozhibo.com/common/h5/carnival/0309_mini.jpg'
                }, function (response) {
                    console.log('success');
                });
            });
        },
        layer: function(x) {
            if (x == 1) { //参与度查询
                this.getUserActMud();
                $('.involve_wrap').show();
            }
            if (x == 2) {
                $('.involve_wrap').hide();
            }
            if (x == 3) {
                $('.hand_left_t').show();
            }
            if (x == 4) {
                $('.hand_left_t').hide();
            }
            if (x == 5) {  //捐赠提示
                $('.hand_left_t2').show();
            }
            if (x == 6) {
                $('.hand_left_t2').hide();
            }
            if (x == 7) {
                $('.m_get_wrap').hide();
            }
            if (x == 8) {  //成功领取系统赠泥
                $('.m_get_wrap2').hide();
                this.getUserActMud();
            }
            if (x == 9) { //我要捐钱弹层
                $('.m_give_wrap').show();
                this.getlist();
                _czc.push(["_trackEvent", "宣传页", "我要捐赠", "点击次数"]);
                var self = this;
                $("#wocao").focus(function(){
                    self.donator_Default = true;
                });
            }
            if (x == 10) {
                this.search_Info.default = false;
                this.search_Info.tdId = '';
                this.donator_Default = true;
                this.donator_Info.amount = '';
                $('.m_give_wrap').hide();
            }
            if(x == 11) { //土豆号不存在
                $('.m_give_t1').show();
            }
            if(x == 12) { 
                $('.m_give_t1').hide();
            }
            if(x == 13) { //捐赠时没有输入土豆号弹窗
                $('.m_give_t2').show();
            }
            if(x == 14) { 
                $('.m_give_t2').hide();
            }
            if(x == 15) {  //确认捐赠
                $('.m_give_t4').show();
            }
            if(x == 16) {  
                $('.m_give_t4').hide();
                _czc.push(["_trackEvent", "捐钱", "取消", "点击次数"]);
            }
            if(x == 17) {  //土豆泥余额不足
                $('.m_give_t3').show();
            }
            if(x == 18) {  
                $('.m_give_t3').hide();
            }
            if(x == 19) {  //捐赠成功
                $('.m_give_t5').hide();
            }
            if(x == 20) {  //捐赠自己
                $('.m_give_t6').hide();
            }
        },
        getmoney: function() {
            _czc.push(["_trackEvent", "宣传页", "我要领钱", "点击次数"]);
            var self = this;
            $.ajax({
                type: 'post',
                url: self.domain + "/activity/dthUserSystemMudDetail/save",
                data: {
                    userId: self.userId
                },
                success: function(msg) {
                    if (msg.errorCode == 0) {
                        self.tudouni = msg.result.userGetSystemMud;
                        self.systemMud = msg.result.systemMud;
                        $('.m_get_wrap2').show(); //成功领钱 
                    }
                    if (msg.errorCode == 2010101) {//1小时内领过了
                        $('.m_get_wrap').html(`
                        <div class="m_get">
                            <img src="https://image.tudouni.doubozhibo.com/common/h5/carnival/0309_getmoney_22.png" alt="">
                            <span id="m_alget_closed"></span>
                        </div>
                        `).show(); 
                        $('#m_alget_closed').click(function() {
                            $('.m_get_wrap').hide();
                        });
                    }
                    if (msg.errorCode == 2010102) {  //领光了
                        $('.m_get_wrap').html(`
                            <div class="m_get">
                                <img src="https://image.tudouni.doubozhibo.com/common/h5/carnival/0309_getmoney_23.png" alt="">
                                <span id="m_get_closed"></span>
                            </div>
                        `).show(); 
                        $('#m_get_closed').click(function() {
                            $('.m_get_wrap').hide();
                        });
                    }
                },
                error: function(msg) {
                    if (msg.responseJSON.errorCode == 2010101) {
                        $('.m_get_wrap').show();
                    }
                }
            })
        },
        getlist: function() {
            var self = this;
            $.ajax({
                type: "get",
                url: self.domain + '/activity/dthDonationDetail/page?pageNum=1&pageSize=200',
                success: function(msg){
                    if (msg.errorCode == 0) {
                       self.giveList = msg.result.list;
                       //console.log(self.giveList)
                       $(document).ready(function(){
                            var myscroll2;
                            var wrap2 = document.getElementById('wrapper2');
                            myScroll2 = new IScroll(wrap2, {
                                scrollX: false,
                                scrollY: true,
                                scrollbars: 'custom',
                                resizeScrollbars: false,
                                click: true
                            });
                            wrap2.addEventListener('touchmove', function (e) { e.preventDefault(); },{
                                capture: false,
                                passive: false
                            });
                       });
                    }
                }
            })
        },
        getUserActMud: function() {
            var self = this;
            $.ajax({
                type: "get",
                url: self.domain + "/activity/dthDonationDetail/getUserActMud?userId=" + self.userId,
                success: function(msg){
                    if (msg.errorCode == 0) {
                        self.iDonateMud = msg.result.iDonateMud;  //我捐赠
                        self.DonateMudToMe = msg.result.DonateMudToMe;  //收到的捐赠
                        self.SystemTotalMud = msg.result.getSystemTotalMud; //获取平台的
                    }
                }
            });
        },
        searchInfo: function(){
            var self = this;
            if (!self.search_Info.tdId) {
                self.layer(11); //输入错误的土豆号弹窗
            } else {
                _czc.push(["_trackEvent", "捐钱", "搜索", "点击次数"]);
                $.ajax({
                    type: "get",
                    url: self.domain + '/activity/dthDonationDetail/getAnchorInfo?userCode=' + self.search_Info.tdId,
                    success: function(msg){
                        if (msg.errorCode == 0 && msg.result.userId) {
                            self.donator_Default = false;  //显示捐赠
                            self.search_Info.default = true;
                            self.search_Info.nickname = msg.result.nickname;
                            self.search_Info.photo = msg.result.photo;
                            self.search_Info.userId = msg.result.userId;
                        } else {
                            self.layer(11); //输入错误的土豆号弹窗
                        }
                    }
                })         
            }
        },
        donateFun: function(){
            _czc.push(["_trackEvent", "捐钱", "捐钱", "点击次数"]);
            var self = this;
            if(!self.search_Info.tdId){
                self.layer(13);  //没有输入主播土豆号弹窗
                return;
            }
            if (self.donator_Info.amount < 1000) {
                $('.hand_left_t2').show();
                return;
            }
            if (self.donator_Info.amount) {
                self.layer(15);
            }
           
        },
        donate: function() {
            _czc.push(["_trackEvent", "捐钱", "确定", "点击次数"]);
            var self = this;
            $.ajax({
                type: "post",
                url: self.domain + '/activity/dthDonationDetail/save',
                data:{
                    "donatorId": self.userId,
                    "anchorId": self.search_Info.userId,
                    "amount": self.donator_Info.amount
                },
                success: function(msg){
                    if (msg.errorCode == 0) { //捐赠成功
                        self.getdata(); //刷新首页榜单
                        self.getlist();
                        $('.m_give_t4').hide();
                        $('.m_give_t5').show();
                    } else if (msg.errorCode == 2010105) { //捐赠最少需要泥
                        console.log(msg.errorMsg);
                        $('.hand_left_t2').show();
                    } else if (msg.errorCode == 1010) { 
                        self.layer(16);
                        self.layer(17); //土豆泥余额不足弹窗
                    } else if (msg.errorCode == 2010103){
                        self.layer(16);
                        self.layer(17); //土豆泥余额不足弹窗
                    } else if (msg.errorCode == 2010104){ //捐自己
                        $('.m_give_t4').hide();
                        $('.m_give_t6').show();
                    }
                }
            })        
        },
        inputFun: function() {
            if (this.isAndroid) {
                //捐赠
                $("#wocao_search").css("margin-top","-70%");
            }
        },
        inputBlu: function(x) {
            if (this.isAndroid) {
                $("#wocao_search").css("margin-top","0");
                x ? this.donateFun() : this.searchInfo();
            }
        }
    }
})