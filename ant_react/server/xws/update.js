
var http = require('http')
var fs = require('fs');
var path = require('path');
var request = require('request');
var lib  =require('./service')
const formidable = require('formidable')
formidable.encoding = 'utf-8';


//中传文件上传的node服务器文件夹
var target_path = path.join(__dirname, '../public')
var target_path_more = path.join(__dirname, '../publicMore')
fs.exists(target_path,function(err){
  if(!err){
    fs.mkdir(target_path,function(){
      console.log(target_path,'：文件路径创建成功')
    })
  }else{
    console.log(target_path,'：文件路径已经存在')
  }
})
fs.exists(target_path_more,function(err){
  if(!err){
    fs.mkdir(target_path_more,function(){
      console.log(target_path_more,'：文件路径创建成功')
    })
  }else{
    console.log(target_path_more,'：文件路径已经存在')
  }
})

module.exports  = function(app){

  // 上传图片
  app.post('/SibuXwsApiFile/*',function(req,res){
    var url = req.url
    url = url.replace(/\/SibuXwsApiFile\//g,'/')
    var form = new formidable.IncomingForm()
    form.parse(req, function(err, fields, files) {
      // define err page
      if (err) return res.end('upload file error')

      var tmp_path = files.file.path
      var type = files.file.name.split('.')[1]
      var name = [Date.now(),type]
      name = name.join('.')
      var target_file = path.join(target_path, name)

      var source = fs.createReadStream(tmp_path)
      var dest = fs.createWriteStream(target_file)

      source.pipe(dest).on('close',function(){
        console.log(lib.url+url)
        var cookie = req.headers['cookie']
        var options = {
          method: 'POST',
          url: lib.url+url,
          headers: {
            'User-Agent': 'request',
            'Cookie' : cookie,
            'Content-Type': 'application/json',
          },
        }
        var r = request(options, function optionalCallback(error, response, body) {
          body = JSON.parse(body)
          if (error) {
            console.log(error)
          }
          res.json(body)
          fs.unlink(target_file,function(err){
            if(!err)console.log(target_file,'删除成功')
          })
        })
        var pushForm = r.form()
        pushForm.append('file',fs.createReadStream(target_file),{filename: name})
        for(var key in fields){
          if(key){
            pushForm.append(key,fields[key])
          }
        }
      })
    })
  })

  // 上传更多图片
  app.post('/SibuXwsApiFileM/*',function(req,res){
    var url = req.url
    url = url.replace(/\/SibuXwsApiFileM\//g,'/')
    var formParse = new formidable.IncomingForm()

    formParse.multiples=true;//设置为多文件上传  
    formParse.keepExtensions=true;//是否包含文件后缀  
    var files=[];  
    //文件都将保存在files数组中  
    // formParse.on('file', function (filed,file) {  
    //     files.push([filed,file]);  
    // }) 

    formParse.parse(req, function(err, fields, files) {
      // define err page
      if (err) return res.end('upload file error')

      console.log(files.files)
      // console.log(files.file.path)
      res.json({
          code:0
        })
      return 
      var tmp_path = files.files.path
      var name = files.files.name
      // name = name.join('.')
      var target_file = path.join(target_path_more, name)

      var source = fs.createReadStream(tmp_path)
      var dest = fs.createWriteStream(target_file)

      source.pipe(dest).on('close',function(){
        console.log(lib.url+url)
        res.json({
          code:0
        })
        // var cookie = req.headers['cookie']
        // var options = {
        //   method: 'POST',
        //   url: lib.url+url,
        //   headers: {
        //     'User-Agent': 'request',
        //     'Cookie' : cookie,
        //     'Content-Type': 'application/json',
        //   },
        // }
        // var r = request(options, function optionalCallback(error, response, body) {
        //   body = JSON.parse(body)
        //   if (error) {
        //     console.log(error)
        //   }
        //   res.json(body)
        //   fs.unlink(target_file,function(err){
        //     if(!err)console.log(target_file,'删除成功')
        //   })
        // })
        // var pushForm = r.form()
        // pushForm.append('file',fs.createReadStream(target_file),{filename: name})
        // for(var key in fields){
        //   if(key){
        //     pushForm.append(key,fields[key])
        //   }
        // }
      })
    })
  })
}