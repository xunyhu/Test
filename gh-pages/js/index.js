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
var uid = 38151;
$.ajax({
	type: "get",
	url: "http://api.tudouni.doubozhibo.com/h5/user/info?uid="+uid,
	async: true,
	dataType: 'json', 
	success: function(data){
		console.log(data);
		var data = data.data;
		//用户资料		
		$('.touX').css({'background-image':'url('+ data.photo +')'});
		$('.headimg').css({'background-image':'url('+ data.photo +')'});
		$('.name').text(data.nickName);
		$('.grade').text(data.grade);
		$('.identity').text(data.gradeName);
		$('.headpic').find('p:eq(1)').text('ID:'+data.unumber);
		$('.attention').text(data.follows);
		$('.fans').text(data.fans);
		var sex = data.sex;
		if (sex == 1) {
			$('.sex').css({'background': 'url(icon/female@2x.png)','background-size':' 100% 100%'})
		} else {
			$('.sex').css({'background': 'url(icon/personal_center_crown@2x.png)','background-size':' 100% 100%'})
		}
	}
});

//tips吸顶

