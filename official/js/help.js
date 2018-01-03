$(function(){
    //切换主题
    var $li = $('#m-content .left li');
    $.each($li, function(index, ele) {
        ele.click(function(){
            $li.removeClass('active');
            $(this).addClass('active');
            $('#m-content .right div').removeClass('active').eq(index).addClass('active');
        })
    })
})