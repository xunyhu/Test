
// const serverUrl = 'http://101.37.84.176'
const port =  80 //8083
//const serverUrl = "http://sellerapi.mall.doubozhibo.com" //正式
const serverUrl ="http://seller.uat.doubozhibo.com"  //uat环境
// const serverUrl = "http://192.168.130.92:8085" //邱景旺本地api地址
const token = 'sI6EEuhEfZlufsE8IrGc2lgXuOsff73CkCSLofX2uz*3Z2U7zyyn3VnztSb: LYBzybev4*7VBP4SqjbpSl1hhw__'

function getOptions(_path,method,req){
  console.log(serverUrl+_path)
  var cookie = req.headers['cookie']
  var options = {
    method: method||'GET',
    url: serverUrl+_path,
    port:port,
    headers: {
      'User-Agent': 'request',
      'Cookie' : cookie,
      'Content-Type': 'application/json',
    },
  }
  if(method === 'POST'){
    options.formData = req.body
    options.json = true
  }
  return options
}

function getJsonOptions(_path,req,body){
  console.log(serverUrl+_path)
  var cookie = req.headers['cookie']
  if(body && typeof body == 'string'){
    body = JSON.parse(body)
  }
  var options = {
    method: 'POST',
    url: serverUrl+_path,
    port:port,
    headers: {
      'Cookie' : cookie,
      'Content-Type': 'application/json'
    },
    body:body,
    json: true
  }
  return options
}


const lib = {
  url : serverUrl,
  getOptions : getOptions,
  getJsonOptions :getJsonOptions
}

module.exports=lib

// 