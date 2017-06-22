<template>
	<div>
		<div class="tips">
			<div class="fl logo">
				<img src="../images/logo@2x.png"/>
				<p><span>|</span>打开查看更多内容</p>
			</div>
			<div class="fr download">
				<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">免费下载</a>
			</div>
		</div>
		<header>
			<div class="headpic">
				<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
					<div class="touX">
						<img :src='headpic' v-if='headpic' />
						<span></span>
					</div>
				</a>
				<p>
					<span class="name">{{info.uname}}</span>
					<span class="sex"></span>
					<a class="grade"><img src="../images/icon/grade-1.png"/><span>{{info.grade}}</span></a>
					<span class="identity">{{info.gradeName}}</span>
				</p>
				<p> ID:{{info.unumber}} </p>
				<p> 这个家伙有点懒~ </p>
				<p> 
					关注&nbsp;<span class='attention'>{{info.follows}}</span>
					<span>  |  </span>
					粉丝&nbsp;<span class="fans">{{info.fans}}</span>
				</p>
			</div>
		</header>
		<div class="billborad">
			<div class="fl guard">
				<img class="fl" src="http://image.tudouni.doubozhibo.com/common/h5/icon_list_ranking@2x.png"> 
		   		<p class="fl">粮票贡献榜</p>
			</div>
			<ul class="fr guards">
				<li>
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
						<span></span>
					</a>					
				</li>
				<li>
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
						<span></span>
					</a>
				</li>
				<li>
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
						<span></span>
					</a>
				</li>
			</ul>
		</div>			
	</div>
</template>
<script>

	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
	export default {
		data() {
			return {
				msg: "我是头部",
				headpic:'',
				info: {
					uname: '',
					unumber: '',
					gradeName: '',
					sex: '',
					grade: '',
					follows: '',
				}
			}
		},
		mounted() {			
			//请求用户数据
			$.ajax({
				type: "get",
				url: "http://api.tudouni.doubozhibo.com/h5/user/info?uid=" + getUrlParam('uid'),
				async: true,
				dataType: 'json',
				success: function(data) {
					var data = data.data;
					//console.log(data);
					var signature = data.signature;
					if(signature) {
						$('.headpic').find('p:eq(2)').text(signature);
					}
					var sex = data.sex;
					if(sex == 0) {
						$('.sex').css({
							'background': 'url(http://image.tudouni.doubozhibo.com/common/h5/female@2x.png)',
							'background-size': ' 100% 100%'
						})
					} else {
						$('.sex').css({
							'background': 'url(http://image.tudouni.doubozhibo.com/common/h5/male@2x.png)',
							'background-size': ' 100% 100%'
						})
					}
					if (data.photo) {
						this.headpic = data.photo;
					} else {
						this.headpic = false;
					}					
					this.info.uname = data.nickName;
					this.info.sex = data.sex;
					this.info.grade = data.grade;
					this.info.gradeName = data.gradeName;
					this.info.follows = data.follows;
					this.info.unumber = data.unumber;
					this.info.fans = data.fans;
				}.bind(this)
			})
		}
	}
</script>
<style lang="scss">
body {margin: 0;padding: 0;}
img {margin: 0;padding: 0; }
h1, h2, h3, h4, h5, h6, p, figure, form, blockquote { margin: 0; }
ul, ol, li, dl, dd ,span{ margin: 0; padding: 0; }
ul, ol { list-style: none; }
a {text-decoration: none;}
.fl {float: left;}
.fr {float: right;}
/*tips提醒*/
.tips {
    overflow: hidden;
    .logo img,.logo p {float: left;}
    .logo img {
        width: 5rem;
        padding: 0.5rem 0.3rem 0.5rem 0.7rem;
    }
    .logo p {
        font-size:0.6rem;
        padding-top: 0.9rem;
        color: rgb(51,51,51); 
        span {padding-right:0.3rem;color: rgb(238,238,238);}       
    }
    .download {
        text-align: center;
        border-radius: 5px;
        background: -webkit-linear-gradient(left, rgb(243,169,17) , rgb(245,119,49)); 
        margin: 0.5rem 0.7rem 0 0;
        a {
            display: inline-block;
            color: #fff;
            font-size: 0.6rem;
            padding: 0.4rem;
        }
    }
}
/*head用户信息*/
header {
    background: url(../images/bg1@2x.png) no-repeat;
    background-size:100% 100%;
}
.headpic {
    margin: 0 auto;
    padding-bottom: 1.8rem;
    overflow: hidden;
    p {
        text-align: center;
        line-height: 1.5rem;
        height: 1.5rem;
        color: #fff;
        font-size: 0.8rem;
    }
    p:nth-child(3),p:nth-child(4) {
        color: #c9c8c8;
        font-size: 0.6rem;
    }
    p:nth-child(5) span:nth-child(2) {
        margin: 0 0.7rem;
    }
    .sex {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        position: relative;
        top: 0.25rem;
        margin: 0 0.15rem 0 0.25rem;
        border-radius: 50%;
    }
    
    .grade {
        display: inline-block;
        position: relative;
        border-radius: 3px;
        width: 1.8rem;
        height: 1rem;
        line-height: 1rem;
        color: #fff;
        background: #eed819;
        padding-right: 0.2rem;
        img {
            display: inline-block;
            width: 0.8rem;
            position: relative;
            top: 0.1rem;
        }
    }
}
.touX {
	width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid #d6cbbf;
    position: relative;
    margin:  3.9rem auto 0.6rem;
    background: url("http://image.tudouni.doubozhibo.com/common/default/header.png") no-repeat center center;
    background-size:100%;
    img {
    	width: 100%;
    	border-radius: 50%;
    }
    span {
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border: 1px solid #d6cbbf;
        border-radius: 50%;
        background: url(../images/icon/personal_center_crown@2x.png) no-repeat;
        background-size: 100% 100%;
    }
}
/*粮票贡献榜*/
.billborad {
	height:3.3rem;line-height: 3.3rem;
	.guard {		
        img {width: 1.6rem;padding-left: 0.7rem;margin-top:0.68rem;}       
        p {font-size: 0.7rem;padding-left: 0.3rem;}
    }
    .guards li {
        float: left;
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 50%;
        background: url("http://image.tudouni.doubozhibo.com/common/default/header.png") no-repeat;
        background-size: 100%;
        margin:0.8rem 0.5rem 0 0;
        position: relative;
    }
    .guards li:nth-child(1) {
        border: 1.5px solid #ffbd00;
    }
    .guards li:nth-child(1) span {
        position: absolute;
        top: -0.5rem;
        left: -0.4rem;
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        background: url(../images/icon/911497406162_.jpg) no-repeat;
        background-size: 100%;
        transform:rotate(-9deg);
        -webkit-transform:rotate(-9deg); 
    }
    .guards li:nth-child(2) {
        border: 1.5px solid #da947e;
    }
    .guards li:nth-child(2) span {
        position: absolute;
        top: -0.5rem;
        left: -0.4rem;
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        background: url(../images/icon/891497406154_.jpg) no-repeat;
        background-size: 100%;
        transform:rotate(12deg);
        -webkit-transform:rotate(-12deg); 
    }
    .guards li:nth-child(3) {
        border: 1.5px solid #d4d4d0;
    }
    .guards li:nth-child(3) span {
        position: absolute;
        top: -0.5rem;
        left: -0.4rem;
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        background: url(../images/icon/871497406145_.jpg) no-repeat;
        background-size: 100%;
        transform:rotate(12deg);
        -webkit-transform:rotate(-12deg); 
    }
}
</style>