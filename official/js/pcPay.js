window.onload=function(){
	var usr_info = document.querySelector("#usr_info");
	var l = document.querySelector(".b2_list");
	var o=document.createElement("p");//其他金额;
	var li = document.createElement("li");
	var sp = document.querySelector("#startPay");
	var num = document.querySelector("#num");
	var b = document.querySelector("#bill");
	var b2_cuz1 = document.querySelector(".b2_cuz1");
	var b2_cuz2 = document.querySelector(".b2_cuz2");
	var pm=0; //支付方式
	//var uid = document.querySelector("#id_num");
	//var logging = document.querySelector("#logging");
	var cuz = cuzAmount(true);
	//列表后最后一个自定义回调
	function callback(){
		o.style.whiteSpace = 'pre';
		o.style.borderBottom='none';
		o.style.lineHeight="39px";
		o.textContent ="自定义\n充值金额";
		li.appendChild(o);
		l.appendChild(li);
		runApp();
	}
	function runApp(){
		//检测是否已经登陆
		if(getCookie("usrn")){
			var name = getCookie("usrn");
			var foto = getCookie("foto");
			var td_num = getCookie("td_num");
			pre_bd(name,foto,td_num);
		}else{
			pre_log();
			bding();
		}
		
		var lis = l.querySelectorAll("li");
		sp.onclick=function(){
			var tt = document.querySelector("#bill").textContent
			if(tt<1){alert("请至少充值6元（含）以上");return false;}
			if(tt>50000){
				alert("充值金额不能大于5万元");
				document.querySelector("#num").value="50000";
				document.querySelector(".tdb").textContent="500000";
				document.querySelector("#bill").textContent="500000";
				return false;
				}
			uid = getCookie("uid");
			if(getCookie("usrn")){
			for(var i=0;i<lis.length;i++){
			if(lis[i].getAttribute("class")=="on"){
					p=0;
					pid = lis[i].getAttribute("pid");
					break;
				}else{
					var p = 1;
				}
			}
			if(!cuz){	//自定义金额;
				if(num.value==""){alert("请填写你要充值的金额。");return false;};
				if(/[\.]/.test(num.value)){alert("请输入整数");return false;}
				if(/\D+/.test(num.value)){alert("输入非法字符!");return false;}
				if(num.value<6){alert("至少充值6元!");return false;}
				if(num.value>50000){alert("不能大于50000");return false;}
				if(pm!==undefined){
						paying(pm,pid,uid,0);
					}else{
						errorTrigger(4);
				}
			}else{
				if(p==1){	//未选中任何;
					errorTrigger(2);
					return false;
				}else{
					paying(pm,pid,uid,1);
				}
			}
			}else{
				if(id_num.value==""){
					errorTrigger(0);
					return false;
				}
			}
		}
		num.onkeyup=function(){
			if(String(this.value).charAt(0)=="0"){
				this.value = this.value.replace(/[0]/g,"");
				b.textContent = "";
			}
			if(/^\d+$/g.test(this.value)){
				b.textContent=this.value;
				document.querySelector(".tdb").textContent=this.value*10;
			}else{
				var g = this.value.match(/(\d+)/g);
				if(g){
					this.value=g[0];
				}else{
					this.value="";
				}
			}
		};
		/*
		num.onchange=function(){
			b.textContent=this.value;
		}
		*/
		document.body.onkeydown=function(e){
			var e = e.keyCode || e.charCode;
			if((e>=96&&e<=105)||(e>=48&&e<=57)||e==8||e==116||e==46||e==37||e==38||e==39||e==40){
				return true;
			}else{
				return false;
			}
		}
		num.onkeydown=function(){
			if(/^\d+$/g.test(this.value)){
				b.textContent=this.value;
				document.querySelector(".tdb").textContent=this.value*10;
			}else{
				var g = this.value.match(/(\d+)/g);
				if(g){
					this.value=g[0];
				}else{
					this.value="";
				}
			}
		}
		
		try{//新版本浏览器
		lis.forEach(function(v,i,a){
			v.index = i;
			v.onclick=function(){
				var n = this.index;
				for(var i=0;i<lis.length;i++){
					if(brosList.IE(9)||brosList.IE(8)){
						lis[i].removeAttribute("class");
					}else{
						lis[i].classList.remove("on");
					}
				}
				if(brosList.IE(9)||brosList.IE(8)){
					this.setAttribute("class","on");
				}else{
					this.classList.add("on");
				}
				if(n==lis.length-1){	//自定义金额;
					cuz = cuzAmount(false);
				}else{
					cuz = cuzAmount(true);	
					var v = this.querySelectorAll("p")[1].textContent;
					var m = pem(v);
					b.textContent = m;
				}
			}
		});
		}catch(e){//针对老浏览器
			for(var i=0;i<lis.length;i++){
				lis[i].index=i;
				lis[i].onclick=function(){
					var n = this.index;
					for(var i=0;i<lis.length;i++){
						if(brosList.IE(9)||brosList.IE(8)){
							lis[i].removeAttribute("class");
						}else{
							lis[i].classList.remove("on");
						}
						
					}
					if(brosList.IE(9)||brosList.IE(8)){
						this.setAttribute("class","on");
					}else{
						this.classList.add("on");
					}
					if(n==lis.length-1){	//自定义金额;
						cuz = cuzAmount(false);
					}else{
						cuz = cuzAmount(true);	
						var v = this.querySelectorAll("p")[1].textContent;
						var m = pem(v);
						b.textContent = m;
					}
				}
			}
		}
		//支付方式选择;
		var iii = document.querySelector(".b3_payM");
		var ii = iii.querySelector("ul");
		var z = ii.querySelectorAll("li");
		if(brosList.IE(9)||brosList.IE(8)){
			z[0].setAttribute("class","on");
		}else{
			z[0].classList.add("on");
		}
		
	try{//新版本浏览器
		z.forEach(function(v,i,a){
			v.index = i;
			v.onclick=function(){
				for(var i=0;i<z.length;i++){
					z[i].classList.remove("on");
				}
				this.classList.add("on");
				pm = v.index;
			}
		});
	}catch(e){//针对老浏览器
		for(var i=0;i<z.length;i++){
			z[i].index=i;
			z[i].onclick=function(){
				for(var i=0;i<z.length;i++){
					z[i].removeAttribute("class");
				}
				this.setAttribute("class","on");
				pm = this.index;
				//console.log(this.index);
			}
		}
	}
	};
	function pem(str){
		var p = str.match(/(\d+)/);
		if(p){
			return p[0];
		}
		alert('充值金额不正确!');
		return 0;
	}
	//自定义金额功能开关
	function cuzAmount(sws){
		if(typeof sws!=="boolean"){
			throw new Error("参数必须是布尔值!");
			return false;
		}
		if(sws){	//自定义金额;
			var x = true;
			num.value="";
			b.textContent="";
			num.setAttribute("disabled","disabled");
			//sp.setAttribute("disabled","disabled");
			b2_cuz1.style.display="none";
			b2_cuz2.style.display="none";
		}else{
			var x = false;
			b.textContent="";
			num.removeAttribute("disabled");
			b2_cuz1.style.display="block";
			b2_cuz2.style.display="block";
		}
		return x;
	};
	//绑定ID;
function bding(){
	logging.onclick=function(){
		if(id_num.value==""){errorTrigger(0);return false;}
		if(/[a-z|A-Z]/g.test(id_num.value)){alert("你的输入包含字母！！");return false;}
		if(/\D+/g.test(id_num.value)){alert("你的输入包含特殊符号！！");return false;}
		var d = id_num.value;
		if((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")||(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0")){
			//var c = new XDomainRequest();
			var c = new ActiveXObject("Microsoft.XMLHTTP");
		}else{
			var c = new XMLHttpRequest();
		}
		c.open('GET',"https://api.tudouni.doubozhibo.com/html/login?userCode="+d,true);
		//c.open('GET',"http://121.43.161.160:8080/html/login?userCode="+d,true);
		//c.open('GET',"http://192.168.20.188:8099/html/login?userCode="+d,true);
		c.send(null);
		if(brosList.IE(9)||brosList.IE(8)){
			var dd = JSON.parse(c.responseText);
				if(dd.msg=="success"){
				//({msg,data,code}=d);
				var data = dd.data;
				var name = data.nickName;
				if(data.photo){
					var foto = data.photo.replace(/http:/,"https:");
				}else{
					var foto = "https://image.tudouni.doubozhibo.com/common/default/header.png";
				};
				var uid = data.uid;
				var td_num = data.unumber;
				setCookie("usrn",name,1);
				setCookie("foto",foto,1);
				setCookie("td_num",td_num,1);
				setCookie("uid",uid,1);
				pre_bd(name,foto,td_num);
				}else if(dd.code=="1000"){
					alert(dd.msg);
				}else{
					errorTrigger(6);
				}
		}else{
			c.onreadystatechange=func1;
		}
		function func1(){
			if(c.readyState==4 && c.status==200){
				var dd = JSON.parse(c.responseText);
				if(dd.msg=="success"){
				//({msg,data,code}=d);
				var data = dd.data;
				var name = data.nickName;
				if(data.photo){
					//var foto = data.photo;
					var foto = data.photo.replace(/http:/,"https:");
				}else{
					var foto = "https://image.tudouni.doubozhibo.com/common/default/header.png";
				};
				var uid = data.uid;
				var td_num = data.unumber;
				setCookie("usrn",name,1);
				setCookie("foto",foto,1);
				setCookie("td_num",td_num,1);
				setCookie("uid",uid,1);
				pre_bd(name,foto,td_num);
				}else if(dd.code=="1000"){
					alert(dd.msg);
				}else{
					errorTrigger(6);
				}
			}
		}
	}
}
function toInt(num){
	var p = num.match(/(\d+)/g);
	return p;
};

	var url = "https://api.tudouni.doubozhibo.com/wechat/getCoinRule";
	if(brosList.IE(9)||brosList.IE(8)){
		//var a = new XDomainRequest();
		var a = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		var a = new XMLHttpRequest();
	}
	a.open("GET",url+"?osType=android",true);
	a.send(null);
	if(brosList.IE(9)||brosList.IE(8)){
		var d = JSON.parse(a.responseText);
				if(d.msg=="success"){
					d.data.forEach(function(v,i,a){
						var li = document.createElement("li");
						var p1 = document.createElement('p');
						var p2 = document.createElement('p');
						p1.textContent=v.name;
						p2.textContent="￥"+toInt(v.price)[0]+"元";
						li.appendChild(p1);
						li.appendChild(p2);
						li.setAttribute("pid",v.pid);
						l.appendChild(li);
						if(i==0){li.setAttribute("class","on");b.textContent=pem(li.querySelectorAll("p")[1].textContent);}
						if(i==a.length-1){
							callback();
						}
					});
				}else{
					errorTrigger(6);
				}
	}else{
		a.onreadystatechange=func;
	}
	function func(data){
		if(a.readyState==4 && a.status==200){
			var d = JSON.parse(a.responseText);
			if(d.msg=="success"){
				d.data.forEach(function(v,i,a){
					var li = document.createElement("li");
					var p1 = document.createElement('p');
					var p2 = document.createElement('p');
					p1.textContent=v.name;
					p2.textContent="￥"+toInt(v.price)[0]+"元";
					li.appendChild(p1);
					li.appendChild(p2);
					li.setAttribute("pid",v.pid);
					l.appendChild(li);
					if(i==0){li.classList.add("on");b.textContent=pem(li.querySelectorAll("p")[1].textContent);}
					if(i==a.length-1){
						callback();
					}
				});
			}else{
				errorTrigger(6);
			}
		}
	}
}
function errorTrigger(x){
	if(typeof x!=="number"){
		throw new Error("传入参数必须为数字代号！请检查你的错误出发参数!");
		return false;
	}
	switch(x){
		case 0:
			alert("请先输入您的土豆号ID");
			return false;
		case 1:
			alert("您的土豆号ID不正确");
			return false;
		case 2:
			alert("还没选中充值金额");
			return false;
		case 3:
			alert("请填写自定义金额数目");
			return false;
		case 4:
			alert("请选择一种充值方式!");
			return false;
		case 5:
			alert("银联支付尚未开通，我们正开通银联充值渠道，请耐心等待。。。");
			return false;
		case 6:
			alert("服务器内部错误，请重试。");
			return false;
	}
}
//待登陆;

function pre_log(){
	setCookie("usrn",false,-1);
	setCookie("foto",false,-1);
	setCookie("uid",false,-1);
	var count = usr_info.childNodes.length;
	for(var i=0;i<count;i++){
		usr_info.removeChild(usr_info.childNodes[0]);
	}
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var input1 = document.createElement("input");
	var input2 = document.createElement("input");
	p1.textContent="充值账号ID";
	input1.id="id_num";
	input2.id="logging"
	input1.placeholder="请输入土豆泥ID";
	input1.type="text";
	input2.type="button";
	input1.value="";
	input2.value="确认";
	usr_info.appendChild(p1);
	p2.appendChild(input1);
	p2.appendChild(input2);
	usr_info.appendChild(p2);
	document.querySelector("#startPay").style.background="#cccccc";
	input2.setAttribute("onclick","bding2()");
};
//再次调用这个接口;
function bding2(){
	if(id_num.value==""){errorTrigger(0);return false;}
		if(/[a-z|A-Z]/g.test(id_num.value)){alert("你的输入包含字母！！");return false;}
		if(/\D+/g.test(id_num.value)){alert("你的输入包含特殊符号！！");return false;}
		var d = id_num.value;
		if(brosList.IE(9)||brosList.IE(8)){
			//var c = new XDomainRequest();
			var c = new ActiveXObject("Microsoft.XMLHTTP");
		}else{
			var c = new XMLHttpRequest();
		}
		
		c.open('GET',"https://api.tudouni.doubozhibo.com/html/login?userCode="+d,true);
		//c.open('GET',"http://121.43.161.160:8080/html/login?userCode="+d,true);
		//c.open('GET',"http://192.168.20.188:8099/html/login?userCode="+d,true);
		c.send(null);
		if(brosList.IE(9)||brosList.IE(8)){
			var d = JSON.parse(c.responseText);
				if(d.msg=="success"){
				//({msg,data,code}=d);
				var data = d.data;
				var name = data.nickName;
				if(data.photo){
					//var foto = data.photo;
					var foto = data.photo.replace(/http:/,"https:");
				}else{
					var foto = "https://image.tudouni.doubozhibo.com/common/default/header.png";
				};
				var uid = data.uid;
				var td_num = data.unumber;
				setCookie("usrn",name,1);
				setCookie("foto",foto,1);
				setCookie("td_num",td_num,1);
				setCookie("uid",uid,1);
				pre_bd(name,foto,td_num);
				}else if(d.code=="1000"){
					alert(d.msg);
				}else{
					errorTrigger(6);
				}
		}else{
			c.onreadystatechange=func1;
		}
		function func1(){
			if(c.readyState==4 && c.status==200){
				var d = JSON.parse(c.responseText);
				if(d.msg=="success"){
				//({msg,data,code}=d);
				var data = d.data;
				var name = data.nickName;
				if(data.photo){
					//var foto = data.photo;
					var foto = data.photo.replace(/http:/,"https:");
				}else{
					var foto = "https://image.tudouni.doubozhibo.com/common/default/header.png";
				};
				var uid = data.uid;
				var td_num = data.unumber;
				setCookie("usrn",name,1);
				setCookie("foto",foto,1);
				setCookie("td_num",td_num,1);
				setCookie("uid",uid,1);
				pre_bd(name,foto,td_num);
				}else if(d.code=="1000"){
					alert(d.msg);
				}else{
					errorTrigger(6);
				}
			}
		}
}
//待换绑;
function pre_bd(n,p,u){
	var count = usr_info.childNodes.length;
	for(var i=0;i<count;i++){
		usr_info.removeChild(usr_info.childNodes[0]);
	}
	var d=new Array();
	for(var i =0;i<6;i++){
		d[i] = document.createElement("div");
	}
	var btn = document.createElement("button");
	var p3 = document.createElement("p");
	var p4 = document.createElement("p");
	var img = new Image();
	img.src=p;
	img.style.width='100%';
	img.style.height='auto';
	if(brosList.IE(9)||brosList.IE(8)){
		d[0].setAttribute("class","logged");
		d[1].setAttribute("class","ld_l");
		d[2].setAttribute("class","ld_r");
	}else{
		d[0].classList.add("logged");
		d[1].classList.add("ld_l");
		d[2].classList.add("ld_r");
	}
	usr_info.appendChild(d[0]);
	d[0].appendChild(d[1]);	//ld_l
	d[0].appendChild(d[2]);	//ld_r
	d[1].appendChild(d[4]);
	d[1].appendChild(d[5]);
	d[4].appendChild(img);
	d[5].appendChild(p3);
	d[5].appendChild(p4);
	p3.textContent=n;
	p4.textContent="ID:"+u;
	btn.textContent="切换账号";
	btn.setAttribute("onclick","pre_log()");
	d[2].appendChild(btn);
	document.querySelector("#startPay").style.background="#ffc155";
	
}
function paying(t,p,u,j){
	//this.t = t;支付方式;
	//this.p = p;pid
	//this.u = u;uid
	//this.j = j;是否自定义0 非自定义1
	var cj = [t,p,u,j];
	if(t==0){
		weiPay(cj);
	}else if(t==1){
		aliPay(cj);
	}else if(t==2){
		errorTrigger(5);
	}else{
		errorTrigger(4);
	}
}
//支付方式;
function weiPay(ll){
	if(ll[3]==0){	//自定义的金额;
		//alert('正在开发中');
		charging_cuz("weixin",ll[2]);
	}else{
		charging("weixin",ll[1],ll[2]);
		//alert('正在开发中...');
	}
}
function aliPay(ll){
	if(ll[3]==0){
		charging_cuz("zfb",ll[2]);
	}else{
		charging("zfb",ll[1],ll[2]);
	}
}
//发起支付过程...
function pying(f,t,m){
					var s = document.querySelector(".ppanel");
					s.parentNode.removeChild(s);
					var se = document.querySelector("section");
					var ppanels = document.createElement("div");
					var panelTitle = document.createElement("div");
					var pp1 = document.createElement("div");
					var pp2 = document.createElement("div");
					var pp2_1 = document.createElement("div");
					var pp2_1_p = document.createElement("p");
					if(m=="weixin"){
						pp2_1_p.setAttribute("class","wx");
					}else if(m=="zfb"){
						pp2_1_p.setAttribute("class","zfb");
					}
					pp2_1.appendChild(pp2_1_p);
					var pp2_2 = document.createElement("div");
					var pp2_2_p1  = document.createElement("p");
					var pp2_2_p2 = document.createElement("p");
					var pp2_2_p3 = document.createElement("p");
					var pp2_2_p1_span = document.createElement("span");
					//pp2_2_p1.innerHTML="支付金额：6元";
					pp2_2_p1.innerHTML=t[0];
					pp2_2_p1.appendChild(pp2_2_p1_span);
					
					var pp2_2_p2_img = new Image();
					var qrcode = new QRCode(pp2_2_p2, {
					  text:f,
					  width: 256,
					  height: 256,
					  colorDark : '#000000',
					  colorLight : '#ffffff',
					  correctLevel : QRCode.CorrectLevel.H
					});
					pp2_2_p2.appendChild(pp2_2_p2_img);
					//pp2_2_p3.textContent="请使用微信扫描二维码行进支付";
					
					pp2_2_p3.textContent=t[1];
					pp2_2.appendChild(pp2_2_p1);
					pp2_2.appendChild(pp2_2_p2);
					pp2_2.appendChild(pp2_2_p3);
					
					var pp3 =  document.createElement("div");
					var a1 = document.createElement("ul");
					var a2 = document.createElement("li");
					var pp3_1 = document.createElement("span");
					var pp3_2 = document.createElement("input");
					pp3_2.type="button";
					pp3_2.value="返回修改订单信息";
					pp3_2.onclick=function(){
						window.location.reload();
					}
					
					pp3.appendChild(pp3_1);
					pp3.appendChild(pp3_2);
					pp2.appendChild(pp2_1);
					pp2.appendChild(pp2_2);
					
					a2.style.width="209px";
					//a2.textContent="正在使用微信支付";
					a2.textContent=t[2];
					a1.appendChild(a2);
					panelTitle.appendChild(a1);
					if(brosList.IE(9)||brosList.IE(8)){
						ppanels.setAttribute("class","ppanel");
						panelTitle.setAttribute("class","panelTitle");
						pp1.setAttribute("class","pp1");
					}else{
						ppanels.classList.add("ppanel");
						panelTitle.classList.add("panelTitle");
						pp1.classList.add("pp1");
					}
					ppanels.appendChild(panelTitle);
					ppanels.appendChild(pp1);
					pp1.appendChild(pp2);
					pp1.appendChild(pp3);
					se.appendChild(ppanels);
}
//列表充;
function charging(tt,pd,u){
	// var uid = getCookie("uid");
	if((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")||(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0")){
		//var t = new XDomainRequest();
		var t = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		var t = new XMLHttpRequest();
	}
		t.open("GET","https://api.tudouni.doubozhibo.com/pay/web/charge?pid="+pd+"&platform=pc&paymentMode="+tt+"&uid="+u,true);
		
		//t.open("GET","http://192.168.20.141:8099/pay/web/charge?pid="+pd+"&platform=pc&paymentMode="+tt+"&uid="+u,true);
		t.send(null);
		if(brosList.IE(9)||brosList.IE(8)){
			var p = JSON.parse(t.responseText);
				if(p.msg=="success"){
					if(tt=="zfb"){
						//var py = document.createElement("div");
						//py.innerHTML=p.data.payInfo;
						//document.body.appendChild(py);
						//document.forms[0].submit();
						var pp = JSON.parse(p.data);
						var m = document.querySelector("#bill").textContent;
						var qq = ["支付金额："+m+"元","请使用支付宝扫描二维码进行支付","正在使用支付宝支付"];
						pying(p.data.payInfo,qq,tt);

						
						
					}else if(tt=="weixin"){
						var pp = JSON.parse(p.data.payInfo);
						var m = document.querySelector("#bill").textContent;
						var qq = ["支付金额："+m+"元","请使用微信扫描二维码进行支付","正在使用微信支付"];
						pying(pp.code_url,qq,tt);
						
					}
					var ajxl = setInterval("aijj("+p.data.oid+")",3000);
				}
		}else{
			t.onreadystatechange=func2;
		}
		function func2(){
			if(t.readyState==4&&t.status==200){
				var p = JSON.parse(t.responseText);
				if(p.msg=="success"){
					if(tt=="zfb"){
						var py = document.createElement("div");
						//py.innerHTML=p.data.payInfo;
						//document.body.appendChild(py);
						//document.forms[0].submit();
						var m = document.querySelector("#bill").textContent;
						var qq = ["支付金额："+m+"元","请使用支付宝扫描二维码进行支付","正在使用支付宝支付"];
						pying(p.data.payInfo,qq,tt);
						console.log(p.data.oid);
						//var ajxl = setInterval("aijj("+p.data.oid+")",2000);
					}else if(tt=="weixin"){
						var pp = JSON.parse(p.data.payInfo);
						//console.log(pp.code_url);
						var m = document.querySelector("#bill").textContent;
						var qq = ["支付金额："+m+"元","请使用微信扫描二维码进行支付","正在使用微信支付"];
						pying(pp.code_url,qq,tt);
					}
				var ajxl = setInterval("aijj("+p.data.oid+")",3000);
				}
			}
	}
}
//自定义充;
function charging_cuz(tt,u){
	// console.log(tt+":"+u);
	// var uid = getCookie("uid");
	var m = document.querySelector("#bill").textContent;
	if((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")||(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0")){
		//var t = new XDomainRequest();
		var t = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		var t = new XMLHttpRequest();
	}
	
		t.open("GET","https://api.tudouni.doubozhibo.com/pay/more/charge?uid="+u+"&amount="+m+"&paymentMode="+tt+"&platform=pc",true);
		//t.open("GET","http://192.168.20.141:8099/pay/more/charge?uid="+u+"&amount="+m+"&paymentMode="+tt+"&platform=pc",true);
		t.send(null);
		if(brosList.IE(9)||brosList.IE(8)){
			var p = JSON.parse(t.responseText);
				if(p.msg=="success"){
					if(tt=="zfb"){
						var py = document.createElement("div");
						//py.innerHTML=p.data.payInfo;
						//document.body.appendChild(py);
						//document.forms[0].submit();
					
						var m = document.querySelector("#bill").textContent;
						var qq = ["支付金额："+m+"元","请使用支付宝扫描二维码进行支付","正在使用支付宝支付"];
						pying(p.data.payInfo,qq,tt);
						
					}else if(tt=="weixin"){
						var pp = JSON.parse(p.data.payInfo);
						console.log(pp.code_url);
						var m = document.querySelector("#bill").textContent;
						var qq = ["支付金额："+m+"元","请使用微信扫描二维码进行支付","正在使用微信支付"];
						pying(pp.code_url,qq,tt);
					}
					var ajxl = setInterval("aijj("+p.data.oid+")",3000);
				}
		}else{
			t.onreadystatechange=func2;
		}
		function func2(){
			if(t.readyState==4&&t.status==200){
				var p = JSON.parse(t.responseText);
				if(p.msg=="success"){
					if(tt=="zfb"){
						var py = document.createElement("div");
						//py.innerHTML=p.data.payInfo;
						//document.body.appendChild(py);
						//document.forms[0].submit();
						var m = document.querySelector("#bill").textContent;
						var qq = ["支付金额："+m+"元","请使用支付宝扫描二维码进行支付","正在使用支付宝支付"];
						pying(p.data.payInfo,qq,tt);
						
					}else if(tt=="weixin"){
						var pp = JSON.parse(p.data.payInfo);
						var m = document.querySelector("#bill").textContent;
						var qq = ["支付金额："+m+"元","请使用微信扫描二维码进行支付","正在使用微信支付"];
						pying(pp.code_url,qq,tt);
					}
					var ajxl = setInterval("aijj("+p.data.oid+")",3000);
				}
			}
	}
}
//充值结果封装；
function aijj(oid){
	if(brosList.IE(9)||brosList.IE(8)){
		var mt = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		var mt = new XMLHttpRequest();
	}
	//mt.open("get","http://192.168.20.141:8099/pay/charge/query?oid="+oid);
	mt.open("get","https://api.tudouni.doubozhibo.com/pay/charge/query?oid="+oid);
	mt.send(null);
	if(brosList.IE(9)||brosList.IE(8)){
		func4();
	}else{
		mt.onreadystatechange=func3;
	}
	function func3(){
		if(mt.status==200&&mt.readyState==4){
			//console.log(mt.responseText);
			func4();
		}
	}
	function func4(){
		var da = JSON.parse(mt.responseText);
		if(da.msg=="success"){
			console.log("充值中...");
			if(da.data){
				paySuccess();
				clearInterval(ajxl);
			}
		}else{
			console.log("服务器内部错误，请重试。");
			clearInterval(ajxl);
		}
	}
}
//充值成功;
function paySuccess(){
	/**
	var b1 = document.querySelector(".b1");
	var b2 = document.querySelector(".b2");
	var b3 = document.querySelector(".b3");
	var b4 = document.querySelector(".b4");
	var ppanel = document.querySelector(".ppanel");
	ppanel.removeChild(b1);
	ppanel.removeChild(b2);
	ppanel.removeChild(b3);
	ppanel.removeChild(b4);
	**/
	var ppanel = document.querySelector(".ppanel");
	ppanel.parentNode.removeChild(ppanel);
	var newPanel = document.createElement("div");
	newPanel.setAttribute("class","ppanel");
	document.querySelector("section").appendChild(newPanel);
	
	var pcs = document.createElement("div");
	var panelTitle = document.createElement("div");
	if(brosList.IE(9)||brosList.IE(8)){
		pcs.setAttribute("class","pcs");
		panelTitle.setAttribute("class","panelTitle");
	}else{
		pcs.classList.add("pcs");
		panelTitle.classList.add("panelTitle");
	}
	panelTitle.innerHTML="<ul><li>充值</li></ul>";
	var d1 = document.createElement("div");
	var img = new Image();
	img.src="https://image.tudouni.doubozhibo.com/common/h5/newOffical/x_06.png";
	var p = document.createElement("p");
	p.textContent="支付成功！";
	var input = document.createElement("input");
	input.type="button";
	input.value="继续充值";
	input.onclick=function(){window.document.location.reload()};
	d1.appendChild(img);
	d1.appendChild(p);
	d1.appendChild(input);
	pcs.appendChild(d1);
	newPanel.appendChild(panelTitle);
	newPanel.appendChild(pcs);
}
;(function(){
	
})();
