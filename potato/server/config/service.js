const serverUrl = "http://uat.doubozhibo.com/buyer";   //uat环境

var _uid = '1601';
var _token = '33fe853d21a890e66d58b93fecf77058';

/**
 * 
 * @param { *} _path   请求的接口的url地址
 * @param {*} method   get/post
 * @param {*} req      响应值
 * 这个函数最终返回的值是一个包含请求参数的对象
 */
function getOptions(_path,method,req){
    var uid = req.headers['Doubo-UID'] || _uid;
    var token = req.headers['Doubo-Token'] || _token;
    var _id = 1;
    var urlList = _path.split('?');
    if (urlList.length > 1) {
        var str = '&userId=' + _id + '&memberId=' + _id;
        urlList[1] = urlList[1] + str;
    } else {
        urlList.push('userId=' + _id + '&memberId=' + _id);
    }
    _path = urlList.join('?');
    console.log(_path);

    var options = {
        method: method || 'GET',
        headers: {
            'User-Agent': 'request',
            'Doubo-Token': token,
            'Doubo-UID': uid,
            'Content-Type': 'application/json'
        }
    }
    if (method == 'POST') {
        req.body.userId = _id;
        req.body.memberId = _id;
        options.formData = req.body;
    }
    return options;
}


/**
 * 
 * @param {*路径} _path 
 * @param {*请求路径} req 
 * @param {*响应体} body 
 */
function getJsonOptions(_path,req,body) {
    console.log(_path);
    var uid = req.headers['Doubo-UID'] || _uid;
    var token = req.headers['Doubo-Token'] || _token;
    console.log('++++++++++++++' + body);
    if (body && typeof body == 'string') {
        body = JSON.parse(body);
    }
    var options = {
        method: 'POST',
        url:serverUrl + _path,
        headers: {
            'Content-Type': 'application/json',
            'Doubo-Token': token,
            'Doubo-UID': uid
        },
        body: body,
        json: true
    }
    return options;
}


//该模块导出一个对象
const lib = {
    _uid: _uid,
    _token: _token,
    url: serverUrl,
    getOptions: getOptions,
    getJsonOptions: getJsonOptions
}
module.exports = lib;