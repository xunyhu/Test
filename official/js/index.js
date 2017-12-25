window.onload = function(){
    var $index = 0;
    var swiper = new Swiper('.swiper-container', {
        //direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        //mousewheelControl: true,
        mousewheelControl : true,
        mode:'vertical',
        mousewheelControlForceToAxis : true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        onSetTransition: function(swiper, transiton){
            $index = swiper.activeIndex;
        },
        noSwiping : true
    });

    //设置背景
    var backSlide = document.querySelectorAll('.swiper-slide'); 
    for (var i = 0; i < backSlide.length; i++) {
        addbackground(backSlide[i], '../images/head_bg'+ (i + 1) +'.png');
    }

    //鼠标滚轮事件
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll',test($index),false);
    }
    window.onmousewheel = function(event) {
        event = event || window.event;
        showAnimation($index);
    };

    function test(a) {console.log(a)}
    
    //点击分页
    var $btn = document.getElementById('button');
    $btn.onclick = function(){
        showAnimation($index);
    }

    //打印屏幕尺寸
    console.log("高: "+window.document.body.clientHeight, "  宽:"+window.document.body.clientWidth)

    var second = document.querySelector('.body-wrap .secondr :nth-child(1)');    
    var second1 = document.querySelector('.body-wrap .secondr :nth-child(2)');
    var second2 = document.querySelector('.body-wrap .secondr :nth-child(3)');

    var three1 = document.querySelector('.body-wrap .three :nth-child(1)');    
    var three2 = document.querySelector('.body-wrap .three :nth-child(2)');   
    
    var four = document.querySelector('.body-wrap .fourr');    

    var five = document.querySelector('.body-wrap .five');   

    var six = document.querySelector('.body-wrap .sixr') ;
    
    function showAnimation(x) {
        switch (x) {
            case 1:
                second.className = 'active';            
                second1.className = 'active';
                second2.className = 'active';
                three1.className = ' ';
                three2.className = ' ';
                four.className = 'fr fourr';
                five.className = 'fl five';
                six.className = 'fr sixr';
                break;
            case 2:
                three1.className = 'active';
                three2.className = 'active';
                second.className = ' ';            
                second1.className = ' ';
                second2.className = ' ';
                four.className = 'fr fourr';
                five.className = 'fl five';
                six.className = 'fr sixr';
                break;
            case 3:
                four.className += ' active';
                second.className = ' ';            
                second1.className = ' ';
                second2.className = ' ';
                three1.className = ' ';
                three2.className = ' ';
                five.className = 'fl five';
                six.className = 'fr sixr';
                break;
            case 4:
                five.className += ' active';
                second.className = ' ';            
                second1.className = ' ';
                second2.className = ' ';
                three1.className = ' ';
                three2.className = ' ';
                four.className = 'fr fourr';
                six.className = 'fr sixr';
                break;
            case 5:
                six.className += ' active';
                second.className = ' '; 
                second1.className = ' ';
                second2.className = ' ';
                three1.className = ' ';
                three2.className = ' ';
                four.className = 'fr fourr';
                five.className = 'fl five';
                break;
            default:
                three1.className = ' ';
                three2.className = ' ';
                second.className = ' '; 
                second1.className = ' ';
                second2.className = ' ';
                four.className = 'fr fourr';
                five.className = 'fl five';
                six.className = 'fr sixr';
                return;
        }
    }

    function addbackground(ele, url){
        ele.style.backgroundImage = 'url(' + url + ')';
        ele.style.width = '100%';
        ele.style.backgroundSize = 'cover';
        ele.style.backgroundRepeat = 'no-repeat';
    }

}