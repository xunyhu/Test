
var request = require('request');
var lib = require('./service');
var formidable = require('formidable'); //?文件上传相关的包
formidable.encoding = 'utf-8';

module.exports = function(app) {
    app.post(['/SibuXwsApi/*'],function(req,res){
        var path = req.url.split('/');
        var url = req.url;
        var index = paths.indexOf('SibuXwsApi');

        if (index > -1) {
            paths.splice(index,1);
            paths = paths.join('/');
            url = paths;
        }
        var options = lib.getOptions(url,'POST',req);
        function callback(error,response,body) {
            var token = response.headers['wesale-token'];
            var cookie = response.headers['set-cookie'];

            if (!error) {
                var info = JSON.parse(body);
                if (token) {
                    res.serHeader('wesale-token',token);
                }
                if (cookie) {
                    console.log('cookie',cookie);
                    res.serHeader('Set-cookie',cookie[0]);
                }
                res.json(info);
            }
        }
        //这个函数最终是发送一个请求头和回调函数
        request(options,callback);
    });

    app.post(['/SibuXwsApiJson/*'],function(req,res){
        var paths = req.split('/');
        var url = req.url;
        var index = paths.indexOf('SibuXwsApiJson');

        if (index > -1) {
            paths.splice(index,1);
            paths = paths.join('/');
            url = paths;
        }
        var body = '';
        req.on('data',function(chunk){
            body += chunk;
        });
        req.on('end',function(){
            var options = lib.getJsonOptions(url,req,body);
            function callback(error,response,body) {
                if (!error) {
                    res.json(body);
                }
            }
            request(options,callback);
        })
    })
}