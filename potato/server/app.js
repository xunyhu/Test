"use strict";

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var compression = require('compression');        //压缩
var bodyParser = require('body-parser');         //parser  解析器
var cookieParser = require('cookie-parser');     
var path = require('path');
var env = process.env.NODE_ENV;
var port = 86;      

app.use(compression());
app.use(bodyParser());
app.use(cookieParser());


require('./config')(app);

server.listen(port,function(){
    console.log('Express server listening on %d, in %s mode',port,app.get('env'));
});