
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
	if(r != null) return unescape(r[2]);
	return null;
}

import Vue from 'vue'
import $ from 'jquery'
window.$ = $

import hhead from './components/head.vue'
import hcontent from './components/center.vue'
import hfooter from './components/footer.vue'

new Vue({
	el: '#ucenter',
	template: `
		<div>
			<hhead></hhead>
			<hcontent></hcontent>
			<hfooter></hfooter>
		</div>
	`,
	components: {hhead,hcontent,hfooter}
})
