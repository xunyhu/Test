<template>
	<footer>
		<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
			<div>
				<span class="follow fl" ></span>
				<span class="fl">关注</span>
			</div>			
		</a>
		<a class="wrap-chat" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
			<div>
				<span class="chat fl"></span>
				<span class="fl">聊天</span>
			</div>	
		</a>
		<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
			<div>
				<span class="data fl" ></span>
				<span class="fl">资料</span>
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
	    height:2.4rem;
	    position:fixed;
    	bottom:0;
    	display:flex;
	    a {
	    	font-size:0.7rem;
	    	flex:1;
	    	margin:0.6rem 0;
	    	line-height:1.2rem;
	    	div {
	    		width:49%;
	    		overflow:hidden;
	    		margin:0 auto;
	    	}
	    }
	    .follow {
			display:inline-block;
			width:1.2rem;
			height:1.2rem;
			margin-right:0.3rem;
			background:url(http://image.tudouni.doubozhibo.com/common/h5/icon_menu_follow_normal@2x.png) no-repeat center center;
			background-size:100%;
	    }
		.wrap-chat {
			border-left:1px solid #eee;
	    	border-right:1px solid #eee;
		}
	    .chat {
	    	display:inline-block;
			width:1.2rem;
			height:1.2rem;
			margin-right:0.3rem;
			background:url(http://image.tudouni.doubozhibo.com/common/h5/icon_chat_gray_normal@2x.png) no-repeat center center;
			background-size:100%;
	    }
	    .data {
	    	display:inline-block;
			width:1.2rem;
			height:1.2rem;
			margin-right:0.3rem;
			background:url(http://image.tudouni.doubozhibo.com/common/h5/icon_menu_data_press@2x.png) no-repeat center center;
			background-size:100%;
	    }
	}
</style>