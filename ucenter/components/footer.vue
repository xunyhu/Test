<template>
	<footer>
		<a class="follow" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
			<div>
				<img class="fl" src="http://image.tudouni.doubozhibo.com/common/h5/icon_menu_follow_normal@2x.png" alt="">
				<span class="fr">关注</span>
			</div>
		</a>
		<a class="chat"  href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
			<div>
				<img class="fl" src="http://image.tudouni.doubozhibo.com/common/h5/icon_chat_gray_normal@2x.png" alt="">
				<span class="fr">聊天</span>
			</div>
		</a>
		<a class="data"  href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
			<div>
				<img class="fl" src="http://image.tudouni.doubozhibo.com/common/h5/icon_menu_data_press@2x.png" alt="">
				<span class="fr">资料</span>
			</div>
		</a>
	</footer>
</template>
<script>
	export default {
		data() {
			return {
				msg: "我是底部"
			}
		}
	}
</script>
<style scoped lang="scss">
	footer  {
		width:100%;
	    overflow: hidden;
	    position:fixed;
    	bottom:0;
	    a {
	    	font-size:0.7rem;
	    	display:inline-block;
	    	width:32%;
	    	height:2rem;
	    	position:relative;
	    	div {
	    		position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				overflow:hidden;
	    	}
	    }
	    img {
	    	width:1.7rem;
	    }
	}
</style>