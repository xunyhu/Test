
var request = require('request');
var lib  =require('./service')
const formidable = require('formidable')
formidable.encoding = 'utf-8';

module.exports = function(app){
  app.post(['/SibuXwsApi/*'],function(req,res){
    
    var url = req.url
    url = url.replace(/\/SibuXwsApi\//g,'/')
    var options = lib.getOptions(url,'POST',req);
    function callback(error, response, body) {
      var cookie = response.headers['set-cookie']
      if (!error && response.statusCode == 200) {
        // console.log(body)
        // var info = JSON.parse(body);
        // console.log(info)
        // console.log('info')
        if(cookie)res.setHeader('set-cookie',cookie[0])
        res.json(body)
      }
    }
    request(options, callback);    
  })
  app.post(['/SibuXwsApiJson/*'],function(req,res){
    var url = req.url
    url = url.replace(/\/SibuXwsApiJson\//g,'/')
    var body = ''
    req.on('data',function(chunk){
      body+=chunk
    })
    req.on('end',function(){
      var options = lib.getJsonOptions(url,req,body);
      function callback(error, response, body) {
        if (!error) {
          res.json(body)
        }
      }
      request(options, callback); 
    })   
  })
}

