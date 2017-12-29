$(function(){
    //ie8及以下取消点击分页功能
    var ie8 = window.navigator.appVersion.indexOf('MSIE 8.0') > 0;
    var ie7 = window.navigator.appVersion.indexOf('MSIE 7.0') > 0;
    if (ie8 || ie7) {
        $('.content-page').css({'display':'none'});
    }
})