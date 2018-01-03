 //非pc端打开
 window.onresize = function() {
    if(getBrowser().devices.windows||getBrowser().devices.linux||getBrowser().devices.mac){
        console.log("PC端");
    } else {
        window.location.href="https://h5.tudouni.doubozhibo.com/tudouni/html/dnc.html";
    }
     window.location.reload();
 }
 if(getBrowser().devices.windows||getBrowser().devices.linux||getBrowser().devices.mac){
    console.log("PC端");
} else {
    window.location.href="https://h5.tudouni.doubozhibo.com/tudouni/html/dnc.html";
}

//ie8及以下取消点击分页功能
if (window.navigator.appName == 'Microsoft Internet Explorer') {
    if (brosList.IE(8) && window.navigator.userProfile !== undefined) {
        $('.content-page').css({'display':'none'});
    }
}    

//鼠标滚轮事件
if (window.navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
    document.body.addEventListener("DOMMouseScroll", addwheel, false);
} else {
    document.body.onmousewheel = addwheel;
}

var $height = document.body.clientHeight;
var $main = $('.content')[0];
var $start = 0; $end = 0; $now = 0;
function addwheel(event) {
    var oEvent = event || window.event;
    var $direction; //滚轮方向 true为向下 false为向上
    $start = new Date().getTime();
    if (oEvent.wheelDelta) {
        $direction = oEvent.wheelDelta > 0 ? false : true;
    }
    if (oEvent.wheelDeltai) {
        $direction = oEvent.wheelDelta > 0 ? false : true;
    }
    if (oEvent.detail) {
        $direction = oEvent.detail < 0 ? false : true;
    }
    if (($end - $start) < -1000 ) {
        if ($direction && parseInt($main.offsetTop) > -(5*$height)) {
           var $down = -(parseInt($main.offsetTop)/$height) + 1;
           change($down)
        }
        if (!$direction && parseInt($main.offsetTop) < 0) {
            var $up = -(parseInt($main.offsetTop)/$height + 1);
            change($up)
        }
        $end = new Date().getTime();
    } else {
        if (window.navigator.appName == 'Microsoft Internet Explorer') {
            event.returnValue = false; 
            return;
        }
        event.preventDefault();
    }
}

//点击翻屏   
function change(x) {
    if (window.navigator.appName == 'Microsoft Internet Explorer' && (window.navigator.appVersion.indexOf('MSIE 8.0') > 0)) {
        setTimeout($main.style.top = -(x * $height) + 'px', 500);
    } else {
        $(".content").animate({top: (-(x * $height) + 'px')}, 500);
    }
    $('.content-page div').removeClass("active");
    $('.content-page div').eq(x).addClass("active");
    addAnimal(x);
}

//添加动画
function addAnimal(x) {
    $('.content').children().removeClass('active');
    $('.content').children().eq(x).addClass("active");
}
