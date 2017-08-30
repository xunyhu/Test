/**
 * Express configuration
 */

'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var env = process.env.NODE_ENV
var port = 666

app.use(compression());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','src')));

require('./xws')(app);


server.listen(port, function () {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});
  



