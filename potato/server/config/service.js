const serverUrl = "http://uat.doubozhibo.com/buyer";   //uat环境

var _uid = '1601';
var _token = '33fe853d21a890e66d58b93fecf77058';

/**
 * 
 * @param { *} _path   请求的接口的url地址
 * @param {*} method   get/post
 * @param {*} req      响应值
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
        urlList.push('userId')
    }
}