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
         
     })
 }
