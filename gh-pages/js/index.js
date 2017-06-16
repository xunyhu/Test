//适配不同屏幕尺寸
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

//请求用户数据
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); 
    return null;
}

function time() {
	var time = new Date();
	var seperator = ":";
	var currentdate = time.getHours() + seperator + time.getMinutes();
	return currentdate;
}
console.log(time());
//var uid = 38151;
var currenttime = time();
$(function(){
	$.ajax({
	type: "get",
	url: "http://api.tudouni.doubozhibo.com/h5/user/info?uid="+getUrlParam('uid'),
//	url: "http://api.tudouni.doubozhibo.com/h5/user/info?uid="+uid,
	async: true,
	dataType: 'json', 
	success: function(data){
		//console.log(data);
		var data = data.data;
		//用户资料		
		$('.touX').css({'background-image':'url('+ data.photo +')'});
		$('.headimg').css({'background-image':'url('+ data.photo +')'});
		$('.name').text(data.nickName);
		$('.grade span').text(data.grade);
		$('.identity').text(data.gradeName);
		$('.headpic').find('p:eq(1)').text('ID:'+data.unumber);
		$('.attention').text(data.follows);
		$('.fans').text(data.fans);
		var sex = data.sex;
		if (sex == 2) {
			$('.sex').css({'background': 'url(icon/female@2x.png)','background-size':' 100% 100%'})
		} else {
			$('.sex').css({'background': 'url(icon/male@2x.png)','background-size':' 100% 100%'})
		}
	}
});
//个人主页动态
$.ajax({
	type: "get",
	url: "http://api.tudouni.doubozhibo.com/h5/dynamic/list?uid="+getUrlParam('uid'),
//	url: "http://api.tudouni.doubozhibo.com/h5/dynamic/list?uid="+uid,
	async: true,
	dataType: 'json',
	success: function(data){
		console.log(data.data[0]);
		var data = data.data[0];
		$('.livebroad').css({'background': 'url('+ data.images[0].image +') no-repeat','background-size':' 100% 100%'});
		$('.likes span').text(data.bottom1);
		$('.comment span').text(data.bottom2);
		$('.gift span').text(data.bottom3);
		var see = data.topRight;
		var txt = $('.play .fr');
		txt.empty();
		for (var i=0; i<see.length; i++) {
			$('<span></span>').text(see[i]).appendTo(txt);
		}
		//console.log(txt);
		txt.each(function(idx,ele){
			txt[idx].innerHTML += '人观看';
		});
		$('.signature').text(data.content);
		$('.time').text(currenttime);
	}
});
})



