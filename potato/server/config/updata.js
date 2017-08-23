
var fileserverUrl = "http://testseller.mall.doubozhibo.com/api";
var http = require('http');
var fs = require('fs');
var path = require('path');
var request = require('request');//简化http请求，接收两个参数，一个地址一个回调函数
var lib = require('./service'); 
var formidable = require('formidable');// 上传文件用的包
formidable.encoding = 'utf-8';

//中转文件上传的node服务器文件夹
// var target_path = path.join(__dirname,'../public');
// fs.exists(target_path,function(error) {
//     if (!error) {
//         fs.mkdir(target_path,function(){
//             console.log(target_path,':文件路径创建成功');
//         })
//     } else {
//         console.log(target_path,':文件路径已经存在');
//     }
// });

module.exports = function(app) {
    //上传图片
    app.post(['/SibuXwsApiFile/*'],function(req,res){
        var url = req.url;
        url = url.replace(/\/SibuXwsApiFile\//g,'/');
        var form = new formidable.IncomingForm();
        form.parse(req, function(err,fields, files) {
            if (err) return res.end('uploading file error');

            var tmp_path = files.file.path;
            var type = files.file.name.split('.')[1];
            var name = [Date.now(),type];
            name = name.join('.');
            var target_file = path.join(target_path, name);
            var source = fs.createReadStream(tmp_path);
            var dest = fs.createWriteStream(target_file);

            source.pipe(dest).on('close',function() {
                console.log('close');

                var options = {
                    method: 'POST',
                    url: lib.url + url,
                    headers: {
                        'User-Agent': 'request',
                        'Doubo-Token': lib._token,
                        'Doubo-UID': lib._uid,
                        'Content-Type': 'application/json'
                    }
                }

                var r = request.post(options, function optionalCallback(error, response, body) {
                    body = JSON.parse(body);
                    if (error) {
                        console.log(error);
                    }
                    res.json(body);
                })
                var pushForm = r.form();
                pushForm.append('file',fs.createReadStream(target_file),{filename: name});
                pushForm.append('height',110);
                pushForm.append('width',110);
            })
        })
    })
}