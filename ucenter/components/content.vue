<template>
	<div class="content">
		<div class="default" v-if="isShow">
			<img src="../images/tudouni.png"/>
			<p>Ta很懒，没有发表动态喔~</p>
		</div>
		<div class="play" v-for="(i,index) in itmes">
			<ul class="fl">
				<li class="headimg">
					<img :src="i.photo" />
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
				<p v-if="i.type == 0"><span></span>直播中</p>
				<p v-if="i.type == 2" class="playback" v-on:click="play(index)" >回放</p>
			</div>
			<div class="wrap-video" style="display: none;">
				<span class="close" v-on:click="close(index)"><img src="../images/close.jpg" alt="" /></span>
				<video width=100%  autoplay="autoplay" >
					
				</video>
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
				picture: "",
				datatype: false,
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
					var newdate = data;
					if (data.data.length == 0) {
						this.isShow = true;
					} 
					if (data.data.length > 2) {
						var data = data.data.slice(0,2);
						this.itmes = data;	
					} else {
						this.itmes = data.data;	
					}
					//判断数据类型
					var videolist = [];
					var types = {};
					$.each(newdate.data,function(idx,ele){		
						if (ele.type == 0) {//直播
							this.nowShow = ele;
							this.datatype = true;
						}					
						if (ele.type == 2) {//视屏
							this.videos = ele;
							types.dataplay = true;
							videolist.push(getDid(ele.url,'did'));
						}
						if (ele.type == 1) {//图片
							this.picture = ele;
							types.dataimg = true;
						}
					})
					this.vslist = videolist;
					this.dataplay = types.dataplay;
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
			play(idx) {
				var did = this.vslist[idx];
				$.ajax({
					type:"get",
					url:"http://api.tudouni.doubozhibo.com/h5/dynamic/desc?did="+did,
					async:true,
					dataType: 'jsonp',
					success: function(data){
						console.log(data);						
						if (data.code == 0) {	
							var src = data.data.videoURL;
							$('.wrap-video').eq(idx).show().addClass('vactive');
							$('.liveborad').eq(idx).hide();
							var $video = $('<source src="'+ src +'" type="video/mp4"/>');
							$('.wrap-video').eq(idx).find('video').append($video);
							$('.wrap-video').eq(idx).find('video').prop('height',$('.liveborad').eq(idx).height());
						}						
					}
				});
			},
			close(idx) {
				$('.liveborad').eq(idx).show();
				$('.wrap-video').eq(idx).hide().find('video source').remove();
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
    		margin: 0.9rem 0.7rem 0 0;
    		span{
    			color: rgb(255,162,1);
	            display:inline-block;  
	            float: left;    
	            font-size: 1rem;
	            font-family:"Times New Roman",Georgia,Serif                 
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
		img {
			width: 2rem;
    		border-radius: 50%;
    		margin: 0.5rem 0.6rem 0.6rem 0.7rem;
		}
		span {
			position: absolute;
	        right: 0.45rem;
	        bottom: 0.8rem;
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
            height: 1.5rem;
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