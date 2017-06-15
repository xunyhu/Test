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

//  20/375 = x/clientWidth   ==>  x = clientWidth*(20/375)
