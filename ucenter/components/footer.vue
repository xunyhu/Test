<template>
	<!--<footer>
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
	</footer>-->
	<div class="foot_d" v-on:click="openApp" >
        <a href='http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni' >
            <div>打开土豆泥直播查看更多吧 →</div>
        </a>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				msg: "我是底部"
			}
		},
		methods: {
			openApp() {
				window.location.href= "tudouni://tudouni/DnyDesc";
				setTimeout(function(){
					window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni";
				},2000);	
			}
		}
	}
</script>
<style scoped lang="scss">
	/*footer  {
		width:100%;
	    height:2.4rem;
	    position:fixed;
    	bottom:0;
    	display:flex;
    	background:#fff;
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
	}*/
* {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-tap-highlight-color: transparent;
	tap-highlight-color: rgba(0, 0, 0, 0);
}
.foot_d {
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    background-color: #efab28;
}

.foot_d a {
    color: #FFFFFF;
    text-align: center;
    background: #efab28;
    font-size: 0.7rem;
    line-height: 2.8rem;
}
</style>