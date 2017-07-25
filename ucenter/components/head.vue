<template>
	<div>
		<div class="tips">
			<div class="fl logo">
                <div class="fl"></div>
                <a class="fl" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
                    <span>|</span>打开查看更多内容
                </a>
			</div>
			<div class="fr download">
				<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">免费下载</a>
			</div>
		</div>
		<header>
			<div class="headpic">
				<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">
					<div class="touX">
						<!--<img :src='headpic' v-if='headpic' />-->
						<span></span>
					</div>
				</a>
				<p>
					<span class="name">{{info.uname}}</span>
					<span class="sex"></span>
					<a class="grade"><img src="http://image.tudouni.doubozhibo.com/common/h5/grade-1.png"/><span>{{info.grade}}</span></a>
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
				msg: "head",
				headpic:'',
				info: {
					uname: '',
					unumber: '',
					gradeName: '',
					sex: '',
					grade: '',
					follows: '',                    
				},
                sid: '',
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
                    if(data == undefined) {
                        return false;
                    }
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
						$('.touX').css({
							'background': 'url('+ data.photo +')',
							'background-size': ' 100% 100%'
						})
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
                    //粮票排行sid
                    this.sid = data.uid;
				}.bind(this)
			});
            //请求粮票贡献榜头像
            $.ajax({
                type: "get",
                url: "http://api.tudouni.doubozhibo.com/fans/order?sid="+ getUrlParam('uid') + "&type=3&page=1&pageSize=3",
                async: true,
                dataType: 'json',
                success: function(data) {
                    if (data.code !== 0) {
                        return null;
                    }
                    // console.log(data.data);
                    var data = data.data;
                    $.each(data,function(index, el) {
                        $('.guards li').eq(index).css({
                            'background': 'url('+ el.photo +')',
                            'background-size': ' 100% 100%'
                        })
                    });
                }
            })
		}
	}
</script>
<style lang="scss">
body {margin: 0;padding: 0;font-family:"微软雅黑", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;}
img {margin: 0;padding: 0; }
h1, h2, h3, h4, h5, h6, p, figure, form, blockquote { margin: 0; }
ul, ol, li, dl, dd ,span{ margin: 0; padding: 0; }
ul, ol { list-style: none; }
a {text-decoration: none;color:black;}
.fl {float: left;}
.fr {float: right;}
* {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: rgba(0, 0, 0, 0);
}
/*tips提醒*/
.tips {
    width:100%;
    height:2.6rem;
    .logo {
        overflow:hidden;
        div {
            margin:0.4rem 0 0 0.7rem;
            width:5rem;
            height:1.7rem;
            background:url(http://image.tudouni.doubozhibo.com/common/h5/logo@2x.png) no-repeat center center;
            background-size:100%;
        }
        a {
            font-size:0.7rem;
            text-decoration:none;
            line-height:2.6rem;
            span {
                color:#eee;
                font-weight:200;
                padding:0 0.3rem;
            }
        }
    }
    .download {
        text-align: center;
        border-radius: 5px;
        background: -webkit-linear-gradient(left, #F3A910 , #F57730); 
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
    background: url(http://image.tudouni.doubozhibo.com/common/h5/bg1@2x.png) no-repeat;
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
        font-size: 0.7rem;
        line-height:1.2rem;
        height:1.2rem;
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
    	width: 4rem;
    	height: 4rem;
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
        background: url(http://image.tudouni.doubozhibo.com/common/h5/personal_center_crown@2x.png) no-repeat;
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