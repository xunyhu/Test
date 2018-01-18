window.onload = function() {
    var $play = document.getElementById('play');
    var $mv = document.getElementById('my-video');
    var $videowrap = document.getElementsByClassName('video-wrap')[0];
    var $wrap = document.getElementsByClassName('video')[0];
    $play.onclick = function() {
        this.style.display = 'none';
        $videowrap.style.background = 'black';
        $wrap.style.display = 'block';
        $mv.play();
    }
    //分享
    var share = document.getElementsByClassName('share')[0];
    var $share = document.getElementById('fengx');
    $share.addEventListener('click', wocao, true);
    if (getBrowser().mbs.weixin) {
        share.style.display = 'none';
    }
    if (getBrowser().mbs.mobile) {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/WeiBo/i) == "weibo") {
            share.style.display = 'none';
        }
        if (ua.match(/QQ/i) == "qq") {
            share.style.display = 'none';
        }
    }
    var $lvideo = document.getElementsByClassName('lmv')[0];
    var $left = document.getElementsByClassName('leftmv')[0];
    var $lmv = document.getElementById('leftvideo');
    var $close = document.getElementsByClassName('close')[0];
    $lvideo.onclick = function() {
        $left.style.display = 'block';
        share.style.display = 'none';
        $lmv.play();
    }
    $close.onclick = function() {
        $lmv.pause();
        $left.style.display = 'none';
        share.style.display = 'block';
    }

    var $rvideo = document.getElementsByClassName('rmv')[0];
    var $right = document.getElementsByClassName('rightmv')[0];
    var $rmv = document.getElementById('rightvideo');
    var $closer = document.getElementsByClassName('closer')[0];
    $rvideo.onclick = function() {
        $right.style.display = 'block';
        share.style.display = 'none';
        $rmv.play();
    }
    $closer.onclick = function() {
        $rmv.pause();
        $right.style.display = 'none';
        share.style.display = 'block';
    }

    
    function wocao() {
        function connectWebViewJavascriptBridge(callback) {
            if (window.WebViewJavascriptBridge) {
                callback(WebViewJavascriptBridge);
                console.log("success");
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
                'url': 'https://h5.tudouni.doubozhibo.com/tudouni/html/supershowzxf.html',
                'title': '网红导师张雪峰，1月9日晚上和你聊聊2017年的有趣人生',
                'content': '来土豆泥直播，看张雪峰老师的爆笑演绎',
                'img': 'https://image.tudouni.doubozhibo.com/common/h5/carnival/0106-mini.jpg'
            }, function (response) {
                console.log("failed");
            });
        });
    }

    function connectWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) { 
          callback(WebViewJavascriptBridge) 
        } else { 
          document.addEventListener('WebViewJavascriptBridgeReady', function() { 
            callback(WebViewJavascriptBridge) 
          }, false) 
        } 
    } 

    connectWebViewJavascriptBridge(function(bridge) { 
        window.bridge = bridge;
        bridge.init(function(message, responseCallback) { 
          if (responseCallback) { 
            responseCallback("Right back atcha") 
          } 
        });    
    })    

    function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
                callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function() {
                callback(WebViewJavascriptBridge)
            },false)
        }
    }

    //app点返回按钮时停止播放
    setupWebViewJavascriptBridge(function(bridge) {
        window.bridge = bridge;
        bridge.registerHandler('clearListData',function(data,responseCallback){
            $mv.pause();
            $lmv.pause();
            $rmv.pause();
        });
    })
}