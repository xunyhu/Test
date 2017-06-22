//适配不同屏幕尺寸
function initFontSize(size, width) {
	var size = size || 20,
		width = width || 375,
		clientWidth = document.documentElement.clientWidth <= 480 ? document.documentElement.clientWidth : 480;
	document.getElementsByTagName('html')[0].style.fontSize = clientWidth * size / width + 'px'
}

window.addEventListener("resize", function() {
	setTimeout(function() {
		initFontSize();
	}, 200)
});
initFontSize();

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

function strTime(time) {
	var day = time.split(' ')[0].split('-');
	var times = day[1] + '月' + day[2] + '日';
	return times;
}

$(function() {
	//请求用户数据
	$.ajax({
		type: "get",
		url: "http://api.tudouni.doubozhibo.com/h5/user/info?uid=" + getUrlParam('uid'),
		async: true,
		dataType: 'json',
		success: function(data) {
			//console.log(data);
			var data = data.data;
			//用户资料		
			$('.touX').css({
				'background-image': 'url(' + data.photo + ')'
			});
			$('.headimg').css({
				'background-image': 'url(' + data.photo + ')'
			});
			$('.name').text(data.nickName);
			$('.grade span').text(data.grade);
			$('.identity').text(data.gradeName);
			$('.headpic').find('p:eq(1)').text('ID:' + data.unumber);
			var signature = data.signature;
			if(signature) {
				$('.headpic').find('p:eq(2)').text(signature);
			}
			$('.attention').text(data.follows);
			$('.fans').text(data.fans);
			var sex = data.sex;
			if(sex == 0) {
				$('.sex').css({
					'background': 'url(icon/female@2x.png)',
					'background-size': ' 100% 100%'
				})
			} else {
				$('.sex').css({
					'background': 'url(icon/male@2x.png)',
					'background-size': ' 100% 100%'
				})
			}
		}
	});
	//个人主页动态
	$.ajax({
		type: "get",
		url: "http://api.tudouni.doubozhibo.com/h5/dynamic/list?uid=" + getUrlParam('uid'),
		async: true,
		dataType: 'json',
		success: function(data) {
			console.log(data.data);
			if(data.data == 0) {
				$('.option').hide();
				return false;
			}
			var data = data.data[0];
//			var content = $('.content');
//			content.empty();
//			//内容列表
//			for(let i = 0; i < data.length; i++) {
//				$("<div class='play'></div>").html(`
//					<ul class="fl">
//						<li class="headimg">
//							<span></span>
//						</li>
//						<li>
//							<p class="name"></p>
//							<p class="time"></p>
//						</li>
//					</ul>
//					<div class="fr"></div>
//					<div class="livebroad"></div>
//					<div class="title"></div>
//					<p class="option">
//						<a href="" class="likes">
//							<img src="icon/icon_like_gray_normal@2x.png" />
//							<span></span>
//						</a>
//						<a href="" class="comment">
//							<img src="icon/icon_chat_gray_normal@2x.png" alt="">
//							<span></span>
//						</a>
//						<a href="" class="gift">
//							<img src="icon/icon_like_gift_normal@2x.png" alt="">
//							<span></span>
//						</a>
//					</p>
//				`).appendTo(content);
//				var signature = data[i].content;
//				if(signature) {
//					$('<p class="signature"></p>').appendTo($('.title')[i]).text(signature);
//				}
//				//点赞评论礼物
//				$('.likes span')[i].innerHTML = data[i].bottom1;
//				$('.comment span')[i].innerHTML = data[i].bottom2;
//				$('.gift span')[i].innerHTML = data[i].bottom3;				
//			}
//			//列表最后一条内容
//			$('.play:last').addClass('pback');
			if(data.images) {
				$('.livebroad').css({
					'background': 'url(' + data.images[0].image + ') no-repeat center center',
					'background-size': '100%'
				});
			}
			$('.likes span').text(data.bottom1);
			$('.comment span').text(data.bottom2);
			$('.gift span').text(data.bottom3);
			var see = data.topRight;
			var txt = $('.play .fr');
			txt.empty();
			for(var i = 0; i < see.length; i++) {
				$('<span></span>').text(see[i]).appendTo(txt);
			}
			txt.each(function(idx, ele) {
				txt[idx].innerHTML += '人观看';
			});
			var signature = data.content;
			if(signature) {
				$('<p class="signature"></p>').appendTo($('.title')).text(signature);
			}
			//topSubTitle
			var time = data.topSubTitle;
			$('.time').text(strTime(time));
		}
	});
})