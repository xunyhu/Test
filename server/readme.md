## node.js
app.js ->命令行输入 node app 命令就能运行该js

## express框架
> 安装
npm init -y
npm install express --save

> 使用
```
const express = require('express');
const app = erpress();

app.get('/',function(request,response){
    response.send('Hello world');
});

const server = app.listen(3000,function(){
    let port = server.address().port;
    let host = server.address().host;

    console.log('listening at http://%s:%s',host,port);
})
```

## http模块
这是nodejs其中一个api。要使用 HTTP 服务器与客户端，需要 require('http')。

>使用
```
const http = require('http');

const server = http.createServer( (request,response) => {
    const ip = request.socket.remoteAddress;
    const port = request.socket.remotePort;
    response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    response.end(`你的ip地址是${ip},你的端口号是${port}`);
    console.log('listen at 3000');
    console.log(process.env);//打印我电脑当前的环境变量
}).listen(3000);
```

## process.env
process其实相当于是node.js中的一个api。process.env是调用了其中一个属性。
process对象是一个全局对象，控制着当前node.js整个进程。作为一个对象它对于node.js始终可用，不需要require()。
process.env 属性返回一个包含用户环境变量的对象。

>process.env.NODE_ENV
window下设置环境变量用set命令  set NOOE_ENV=production




## 参考
[nodejs.org](https://nodejs.org/en/)
[nodejs.org中文](https://nodejs.org/zh-cn/)
[nodejs中文网](http://nodejs.cn/)
[express](http://www.expressjs.com.cn/)
