/**
 * coding by hurui
 * 170822
 */

 var request = require('request');
 var lib = require('./service');

 module.exports = function(app) {
     app.get(['/SibuXwaApi/*'],function(req,res){
         var paths = req.url.split('/');
         var url = req.url;
         var index = paths.indexOf('SibuXwsApi');
         if (index > -1) {
             paths.splice(index,1);
             paths = paths.join('/');
             url = paths;
         }
         var potions = lib.getOptions(url,'GET',req);
         function callback(error,response,body) {
             if (!error) {
                 var info = JSON.parse(body);
                 res.json(info);
             }
             request(options,callback);
         }
     });

     app.get(['/SibuXwsCmsApi/*'],function(req,res){
         var paths = req.url.split('/');
         var url = req.url;
         var index = paths.indexOf('SibuXwsCmsApi');
         if (index > -1) {
             paths.splice(index,1);
             paths = paths.join('/');
             url = paths;
         }
         //getCmsOptions方法不存在
         var options = lib.getCmsOptions(url,'GET',req);
         function callback(error,response,body) {
             if (!error) {
                 var info = JSON.parse(body);
                 res.json(info);
             }
         }
         request(options,callback);
     });

     app.get(['/SibuXwsApiSeller/*'],function(req,res){
         var paths = req.url;
         paths = path.replce(/\/SibuXwsApiSeller\//g,'/');
         var options = lib.getOptions(paths,'GET',req);
         options.url = 'http://uat.doubozhibo.com/seller/api' + paths;
         console.log(options.url);

         function callback(error,response,body) {
             if (!error) {
                 var info = JSON.parse(body);
                 res.json(info);
             }
         }
         request(options,callback);
     });

     app.get('/',function (req, res) {
        res.send('666');
     });

     app.get('/home',function (req, res) {
        res.send('你好！');
     });
 }
