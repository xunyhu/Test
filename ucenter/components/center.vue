<template>
	<div class="content">
		<div class="default" v-if="showNull">
			<img src="../images/tudouni.png"/>
			<p>Ta很懒，没有发表动态喔~</p>
		</div>
		<!-- 分享 -->
		<div class="play" v-if="showPlay" v-for="i in playnow">
			<ul class="fl">
				<li class="headimg" v-bind:style="{background:'url('+ i.photo +')', backgroundSize:'100% 100%'}">
					<span></span>
				</li>
				<li>
					<p class="name">{{i.nickName}}</p>
					<p class="time">{{i.topSubTitle | strTime}}</p>
				</li>
			</ul>
			<div class="liveborad" v-bind:style="{background:'url('+ i.sourceCover +') no-repeat center center', backgroundSize:'100% 100%'}">
				<!-- <div class="cover" ></div> -->
				<div class="fr" v-on:click="openApp(i.url)">
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">查看</a>
				</div>
			</div>
			<div class="wrap-signature" v-if="i.content ? true : false">
				<div v-bind:class="{ signature: i.content ? true : false }">{{i.content}}</div>
			</div>
		</div>
		<!-- 小视频 -->
		<div class="play" v-if="showVideo" v-for="i in videolist">
			<ul class="fl">
				<li class="headimg" v-bind:style="{background:'url('+i.photo+')', backgroundSize:'100% 100%'}">
					<span></span>
				</li>
				<li>
					<p class="name">{{i.nickName}}</p>
					<p class="time">{{i.topSubTitle | strTime}}</p>
				</li>
			</ul>
			<div class="fr">
				<p><span>{{i.topRight}}</span> 人已观看</p>
			</div>
			<div class="liveborad" >
				<div class="cover" v-bind:style="{background:'url('+i.images[0].image+') no-repeat', backgroundSize:'100%'}"></div>
				<div class="fr" v-on:click="openApp(i.url)">
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.doubozhibo.tudouni">回放</a>
				</div>
			</div>
			<div class="wrap-signature" v-if="i.content ? true : false">
				<div v-bind:class="{ signature: i.content ? true : false }">{{i.content}}</div>
			</div>
			<p class="option">
				<a href="" class="likes">
					<img src="../images/icon/icon_like_gray_normal@2x.png" />
					<span>{{i.bottom1}}</span>
				</a>
				<a href="" class="comment">
					<img src="../images/icon/icon_chat_gray_normal@2x.png" alt="">
					<span>{{i.bottom2}}</span>
				</a>
				<a href="" class="gift">
					<img src="../images/icon/icon_like_gift_normal@2x.png" alt="">
					<span>{{i.bottom3}}</span>
				</a>
			</p>			
		</div>
		<!-- 图片 -->
		<div class="play" v-if="showImg" v-for="i in imglist">
			<ul class="fl">
				<li class="headimg" v-bind:style="{background:'url('+i.photo+')', backgroundSize:'100% 100%'}">
					<span></span>
				</li>
				<li>
					<p class="name">{{i.nickName}}</p>
					<p class="time">{{i.topSubTitle | strTime}}</p>
				</li>
			</ul>
			<div class="fr">
				<p><span>{{i.topRight}}</span> 人已观看</p>
			</div>
			<div class="liveborad" v-bind:style="{background:'url('+ i.images[0].image +') no-repeat center center', backgroundSize:'100%'}">
				 <div class="fr" v-on:click="openApp(i.url)"><a>{{i.images.length}} 张</a></div>
			</div>
			<div class="wrap-signature" v-if="i.content ? true : false">
				<div v-bind:class="{ signature: i.content ? true : false }">{{i.content}}</div>
			</div>
			<p class="option">
				<a href="" class="likes">
					<img src="../images/icon/icon_like_gray_normal@2x.png" />
					<span>{{i.bottom1}}</span>
				</a>
				<a href="" class="comment">
					<img src="../images/icon/icon_chat_gray_normal@2x.png" alt="">
					<span>{{i.bottom2}}</span>
				</a>
				<a href="" class="gift">
					<img src="../images/icon/icon_like_gift_normal@2x.png" alt="">
					<span>{{i.bottom3}}</span>
				</a>
			</p>			
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
function isIos() {
	var u = navigator.userAgent;
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	return isiOS;
}
function isAndroid() {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	return isAndroid;
}
import $ from 'jquery'
	export default {
		data() {
			return {
				msg: "我是内容",
				showNull: false,
				showPlay: false,
				showVideo: false,
				showImg: false,
				playnow: [],
				videolist: [],
				imglist: [],
			}
		},
		mounted() {
			//请求用户动态
			$.ajax({
				type: "get",
				url: "http://api.tudouni.doubozhibo.com/h5/dynamic/list?uid=" + getUrlParam('uid'),
				async: true,
				dataType: 'json',
				success: function(data) {
					console.log(data);
					if (data.msg !== 'success') {
						return false;
					}
					var self = this;// 指向VueComponent
					if (data.data.length == 0) {
						self.showNull = true;
					} 
					$.each(data.data,function(idx,ele){
						if (ele.type == 0) { //直播
							self.showPlay = true;
							self.playnow.push(ele);
						}
						if (ele.type == 1) { //图片
							self.showImg = true;
							self.imglist.push(ele);
						}
						if (ele.type == 2) { //视屏
							self.showVideo = true;
							self.videolist.push(ele);
						}
					});
					// console.log(self.playnow)
					// console.log(self.imglist)
					// console.log(self.videolist)
				}.bind(this)
			})						
		},
		filters: {
			strTime(time,ele) {
				var day = time.split(' ')[0].split('-');
				var times = day[1] + '月' + day[2] + '日';
				return times;
			}
		},
		methods: {
			openApp(url) {
				console.log(url)
				if (isIos()) {
			        var ifr = document.createElement('iframe');  
			        ifr.src = url;  
			        ifr.style.display = 'none';  
			        document.body.appendChild(ifr);  
			        window.setTimeout(function(){  
			            document.body.removeChild(ifr);  
			        },3000)  
				}
				if (isAndroid()) {
					var ifr = document.createElement('iframe');  
			        ifr.src = url;  
			        ifr.style.display = 'none';  
			        document.body.appendChild(ifr);  
			        window.setTimeout(function(){  
			            document.body.removeChild(ifr);  
			        },3000)  
				}
			}
		}
	}
</script>
<style scoped lang="scss">
/*头部信息*/
	.content {
	    background: rgb(244,245,249);
	    overflow: hidden;
	    margin-bottom:3rem;
	    padding-bottom:0.6rem;
	}
	.play {
		background: #fff;
		overflow: hidden;
		margin-top: 0.6rem;
		.fl li {
	    	float: left;
	    }
	    .fl li:nth-child(2) {
	    	margin-top: 0.5rem;
	    	padding-left: 0.2rem;
	    }
	    p {
	    	font-size: 0.7rem;
	    }
	    .fr p {
	    	font-size: 0.8rem;
    		padding: 0.9rem 0.7rem 0 0;
    		span{
    			color: rgb(255,162,1);                
	        }
	        span:nth-child(even){
	            padding-top: 0.2rem;
	        }
	        span:last-child {
	            padding-right: 0.2rem;
	        }
	    }
	}
	.headimg {
		position: relative;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		margin: 0.5rem 0.6rem 0.6rem 0.7rem;
		border: 1px solid #d6cbbf;
		span {
			position: absolute;
	        right: -0.2rem;
	        bottom: 0rem;
	        display: inline-block;
	        width: 0.8rem;
	        height: 0.8rem;
	        border: 1px solid #d6cbbf;
	        border-radius: 50%;
	        background: url(../images/icon/personal_center_crown@2x.png) no-repeat;
	        background-size: 100% 100%;
		}
	}
	.time {
		font-size: 0.6rem;
	    color: #ccc;
	    padding-top: 0.2rem;
	}
/*内容*/
	.liveborad {
		position: relative;
		width: 100%;
		height: 20rem;
		overflow: hidden;
		background:#ccc;
		// .cover {
		// 	width: 100%;
		// 	overflow:hidden;
		// }
		.fr {			
            a {
            	display: inline-block;
            	margin: 0.7rem 0.7rem 0 0;
            	border: 1px solid #fff;
            	border-radius: 1rem; 
            	background: #4d5f72;
            	opacity: 0.8;
            	text-align: center;
	            color: #fff;
	            font-size: 0.6rem;
	            padding: 0.15rem 1rem;
            }
		}
	}
	.wrap-signature {
		padding:0 0.7rem;
	}
	.signature {
        font-size: 0.8rem;
        padding: 0.5rem 0;
    }
    .option {
        border-top: 2px solid #fbfbfb;
        a {
            display: inline-block;
            width: 32%;
            height: 2.3rem;
            line-height: 2.3rem;
            text-align: center;
            color: #ccc;
            img {
                width: 1.5rem;
                padding-top: 0.4rem;
            }
            span {
            	position: relative;
            	top: -0.4rem;
            }
        }
    }
/*视屏回放*/
.vactive {
	overflow: hidden;
	position: relative;
	z-index: 99;
	width: 100%;
	height: 100%;
	span {
		display: block;
		position: absolute;
		top: 0rem;
		right: 2rem;
		z-index: 100;
		img {
			width: 0.8rem;
		}
	}
}
/*没有内容默认值*/
.default {
	width:100%;
	height: 20rem;
	font-size: 20px;
	text-align: center;
	img {
		width: 80px;
    	margin-top: 4rem;
	}
	p {
		padding-top: 0.8rem;
		font-size: 17px;
		font-family:"微软雅黑", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
	}
}
</style>