<template>
	<footer>
			<ul>
				<li>
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
						<img class="fl" src="http://image.tudouni.doubozhibo.com/common/h5/icon_menu_follow_normal@2x.png" alt="">
						<p class="fl">关注</p>
					</a>					
				</li>
				<li class="talk">
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
						<img class="fl" src="http://image.tudouni.doubozhibo.com/common/h5/icon_chat_gray_normal@2x.png" alt="">
						<p class="fl">聊天</p>
					</a>
				</li>
				<li>
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
						<img class="fl" src="http://image.tudouni.doubozhibo.com/common/h5/icon_menu_data_press@2x.png" alt="">
						<p class="fl">资料</p>
					</a>
				</li>
			</ul>
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
		background: rgb(244,245,249);;
	    overflow: hidden;
	    ul {
	    	height: 3rem;
	    	line-height: 3rem;
	    	background: #fff;
	    	margin-top:0.6rem ;
	    }
	    li {
	        float: left;	       
	        width: 32%;
	        img {
	            width: 1.6rem;
	            margin: 0.8rem 0 0 1rem;
	        }
	        p {
	        	line-height: 3rem;font-size: 0.7rem;
	        }
	    }
	    .talk span {
	    	width: 1.8rem;
	    }
	}
</style>