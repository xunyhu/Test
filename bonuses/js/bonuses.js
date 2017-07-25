function initFontSize(size, width) {
    var size = size || 20, width = width || 375,
        clientWidth = document.documentElement.clientWidth <= 480 ? document.documentElement.clientWidth : 480;
    document.getElementsByTagName('html')[0].style.fontSize = clientWidth * size / width + 'px'
}

window.addEventListener("resize", function () {
    setTimeout(function () {
        initFontSize();
    }, 200)
});

initFontSize();

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

var uid = getUrlParam('uid');
var token = getUrlParam('token');
var page = 1;
var size = 10;
new Vue({
	el: '#bonuses',
	data: {
		tab: 1,
		item: [],
		item2: [],
		item3: [],
		account: false,
		incount: false,
		nocount: false,
	},
	methods: {
		changes: function(x) {
			this.tab = x;
		}
	},
	mounted: function() {
		//已到账
		$.ajax({
			type: 'get',
			url: "http://api.tudouni.doubozhibo.com/auth/account/profit/list?uid="+ uid +"&token="+ token +"&page="+ page +"&pageSize="+size+"&status=1",
            async: true,
            dataType: 'json',
            success: function(data) {
            	console.log(data);
            	if (data.code !== 0) {
            		this.account = true;
            		return;
            	}
            	if (data.data == null || data.data.length == 0) {
            		this.account = true;
            		return;
            	}
            	if (data.data.length > 0) {
            		this.item = data.data;
            	}
            }.bind(this)
		});
		//未到账
		$.ajax({
			type: 'get',
			url: "http://api.tudouni.doubozhibo.com/auth/account/profit/list?uid="+ uid +"&token="+ token +"&page="+ page +"&pageSize="+size+"&status=0",
            async: true,
            dataType: 'json',
            success: function(data) {
            	if (data.code !== 0) {
                    this.incount = true;
                    return;
                }
                if (data.data == null || data.data.length == 0) {
                    this.incount = true;
                    return;
                }
            	if (data.data.length > 0) {
            		this.item2 = data.data;
            	}
            }.bind(this),
           error:function(){
           		document.write(2222);
           }
		});
		//不结算
		$.ajax({
			type: 'get',
			url: "http://api.tudouni.doubozhibo.com/auth/account/profit/list?uid="+ uid +"&token="+ token +"&page="+ page +"&pageSize="+size+"&status=2",
            async: true,
            dataType: 'json',
            success: function(data) {
            	if (data.code !== 0) {
                    this.nocount = true;
                    return;
                }
                if (data.data == null || data.data.length == 0) {
                    this.nocount = true;
                    return;
                }
            	if (data.data.length > 0) {
            		this.item3 = data.data;
            	}
            }.bind(this)
		});
	},
    filters: {
        time(str) {
            var day = str.split(' ')[0] + " " + str.split(' ')[1].slice(0,5);
            return day;
        }
    }
})

