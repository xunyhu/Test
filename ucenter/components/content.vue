<template>
	<div class="content">
		<div class="default" v-if="isShow">
			<img src="../images/tudouni.png"/>
			<p>Ta很懒，没有发表动态喔~</p>
		</div>
		<div class="play"  v-for="(i,index) in itmes">
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
			<div class="liveborad" v-bind:style="{background:'url('+i.images[0].image+') no-repeat center center', backgroundSize:'100%'}">
				<p v-if="i.type == 0" class="playnow" v-on:click="pynow($event,index)"><span></span>直播中</p>
				<p v-if="i.type == 2" class="playback" v-on:click="play($event,index)" >回放</p>
			</div>
			<div class="wrap-video" style="display: none;">
				<span class="close" v-on:click="close(index)"><img src="../images/close.jpg" alt="" /></span>
				<video width=100%  autoplay="autoplay" >
					
				</video>
			</div>			
			<div class="wrap-signature" v-if="i.content ? true : false">
				<div v-bind:class="{ signature: i.content ? true : false }">{{i.content}}</div>
			</div>
			<p class="option" v-if='i.type !== 0'>
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
//tudouni://tudouni/DnyDesc?did=142&type=2
function getDid(url,did) {
	var urls = url.split('?')[1].split('&');
	var obj = {};
	for(var i=0;i<urls.length;i++){
		var temp = urls[i].split('=');
		obj[temp[0]] = decodeURI(temp[1]);
	}
	return obj.did;
}
import $ from 'jquery'
$.fn.exist = function(){
	if($(this).length>=1) {
		return true;
	}
	return false;
}
	export default {
		data() {
			return {
				msg: "我是内容",
				itmes: [],
				topSubTitle: "",
				isShow: false,
				isBroadcast: false,
				nowShow: "",
				videos: "",
				vslist:[],
				picture: [],
				datatype: true,
				dataplay: false,
				dataimg: false,
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
					if (data.code == -99) {
						return false;
					}
					var newdate = data;
					var self = this;// 指向VueComponent
					if (data.data.length == 0) {
						this.isShow = true;
					} 
					if (data.data.length == 1) {
						self.itmes = data.data;	
					}
					if (data.data.length == 2) {						
						$.each(data.data, function() {
							if( this.type == 0 ) { //将直播数据显示在第一条
								self.itmes.unshift(this);
							} else {
								self.itmes.push(this);
							}
						});
						//console.log(self.itmes);
					}
					if (data.data.length > 2) {
						var data = data.data.slice(0,2);
						self.itmes = data;	
					} 
					//判断数据类型
					$.each(newdate.data,function(idx,ele){		
						if (ele.type == 0) {//直播
							self.nowShow = getDid(ele.url,'lid');//获取直播数据的lid
							//self.itmes.unshift(ele);
							self.itmes.splice($.inArray(ele,self.itmes),1);
						}					
						if (ele.type == 2) {//视屏
							self.vslist.push(getDid(ele.url,'did'));//存回放视屏did
						}
						if (ele.type == 1) {//图片
							self.picture.push(ele);
						}
					})
				}.bind(this)
			})						
		},
		filters: {
			strTime(time,ele) {
				var day = time.split(' ')[0].split('-');
				var times = day[1] + '月' + day[2] + '日';
				return times;
			},
			setViews(views) {
				var txt = $('.play .fr p');
				txt.empty();
				for(var i = 0; i < views.length; i++) {
					$('<span></span>').text(views[i]).appendTo(txt);
				}
			}
		},
		methods: {
			play(e,idx) {
				var classname ='.' + e.currentTarget.className;
				for (var i=0;i<$(classname).length;i++) {
					if ($(classname)[i] === e.currentTarget) {
						var did = this.vslist[i];
					}
				}
				//判断当前节点是否存在source标签
				var $exist = $('.wrap-video').eq(idx).find('source').exist();
				if ($exist) {
					//显示video界面，隐藏回放界面
					$('.liveborad').eq(idx).hide();
					$('.wrap-video').eq(idx).show();
					$('.wrap-video').eq(idx).find('video')[0].play();
				} else {
					$.ajax({
						type: "get",
						url:"http://api.tudouni.doubozhibo.com/h5/dynamic/desc?did="+did,
						async:true,
						dataType: 'jsonp',
						success: function(data){
							if (data.code == 0) {
								var src = data.data.videoURL;
								//显示video界面，隐藏回放界面
								$('.wrap-video').eq(idx).show().addClass('vactive');
								$('.liveborad').eq(idx).hide();
								//添加source到viedeo标签内
								var $video = $('<source src="'+ src +'" type="video/mp4"/>');
								$('.wrap-video').eq(idx).find('video').append($video);
								$('.wrap-video').eq(idx).find('video').prop('height',$('.liveborad').eq(idx).height());
								//播放
								$('.wrap-video').eq(idx).find('video')[0].play();
							}
						}
					})
				}
			},
			close(idx) {
				//停止播放
				$('.wrap-video').eq(idx).find('video')[0].pause();
				//隐藏video界面，显示回放界面
				$('.liveborad').eq(idx).show();
				$('.wrap-video').eq(idx).hide();
			},
			pynow(e,idx) {
				var did = this.nowShow;
				//判断当前节点是否存在source标签
				var $exist = $('.wrap-video').eq(idx).find('source').exist();
				if ($exist) {
					//显示video界面，隐藏回放界面
					$('.liveborad').eq(idx).hide();
					$('.wrap-video').eq(idx).show();
					$('.wrap-video').eq(idx).find('video')[0].play();
				} else {
					$.ajax({
						type: "get",
						url:"http://api.tudouni.doubozhibo.com/h5/dynamic/desc?did="+did,
						async:true,
						dataType: 'jsonp',
						success: function(data){
							if (data.code == 0) {
								var src = data.data.videoURL;
								//显示video界面，隐藏回放界面
								$('.wrap-video').eq(idx).show().addClass('vactive');
								$('.liveborad').eq(idx).hide();
								//添加source到viedeo标签内
								var $video = $('<source src="'+ src +'" type="video/mp4"/>');
								$('.wrap-video').eq(idx).find('video').append($video);
								$('.wrap-video').eq(idx).find('video').prop('height',$('.liveborad').eq(idx).height());
								//播放
								$('.wrap-video').eq(idx).find('video')[0].play();
							}
						}
					})
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
		p {
			float: right;
            margin: 0.7rem 0.7rem 0 0;
            width: 4.5rem;
            line-height: 1.5rem;
            border: 1px solid #fff;
            border-radius: 1rem; 
            background: #4d5f72;
            opacity: 0.8;
            color:#fff;
            span {
            	float: left;
                display: inline-block;
                width: 1rem;
                height: 1rem;
                margin: 0.2rem 0.2rem 0 0.5rem;
                background: url(../images/icon/icon_play_yellow_normal@2x.png) no-repeat;
                background-size:100% ;
            }
		}
		.playback {
			width: 3.8rem;
			text-align: center;
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