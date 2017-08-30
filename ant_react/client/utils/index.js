import urls     from './urls'
import get      from './get'
import {post,postJson}     from './post'
// import postJson     from './postJson'
import form     from './form'
import md5      from './md5'
import msg      from './message'
import validate from './validate'
import * as area_code      from './area_code'
import * as address  from './address'
import * as storage  from './storage'
import {fromJS} from 'immutable'

// const userAgent =  window.navigator.userAgent
// const isIos = userAgent.indexOf('iPhone') > -1
// const isAndroid = userAgent.indexOf('Android') > -1
// const isWin = isIos||isAndroid ? false : true // 区分电脑版微信，不是安卓，苹果手机

const utils={
  shopId    : 26,
  version   : '1.1.0',
  platform  : 2,
  height    : window.screen.height,
  width     : window.screen.width,
  url       : urls,
  serverUrl : window.location.host.indexOf('sellerapi.mall.doubozhibo.com')>-1?'http://sellerapi.mall.doubozhibo.com':'http://seller.uat.doubozhibo.com',
  getProvince   : address.getProvince(),
  getCityList   : address.getCityList,
  getCityListByValue : address.getCityListByValue,
  getAreaList   : address.getAreaList,
  getAreaListByValue : address.getAreaListByValue,
  getProvince_code  : area_code.getProvince_code(),
  getCityList_code  : area_code.getCityList_code,
  getAllCity_code   : area_code.getAllCity_code(),
  
  splitAttr : ';', // 分割属性与属性之间的值，需要与安卓,ios,后台对应，否则数据会解析失败
  splitAttrVal : ':', // 分割属性与属性值之间的值，需要与安卓,ios,后台对应，否则数据会解析失败

  postJson,storage,validate, get, post, form, md5, msg,

  number(num,digit){
    digit = digit === undefined ? 2 : +digit;
    return Number(num).toFixed(digit)
  },
  /* 
    根据id获取在数组中的索引下标
    返回索引下标
  */
  getIndexById(list,item){
    if(!Array.isArray(list)){
      console.error('list is not an Array')
      return -1;
    }
    for(let i = 0;i<list.length;i++){
      if( (list[i].id && item.id === list[i].id) || (list[i]===item.id)) {
        return i;
      }
    }
    return -1
  },

  removeItemById(list,id){
    list = fromJS(list).toJS()
    // list = _.cloneDeep(list)
    if(!Array.isArray(list)){
      console.error('list is not an Array')
      return -1;
    }
    var index = -1;
    for(let i = 0;i<list.length;i++){
      if(list[i].id&&id === list[i].id){
        index = i;
        break
      }else{
        if(list[i] === id){
          index = i;
          break
        }
      }
    }
    if(index > -1){
      list.splice(index,1);
    } 
    return list;
  },
  removeItemByIndex(list,id){
    if(!Array.isArray(list)){
      console.error('list is not an Array')
      return -1;
    }
    for(let i = 0;i<list.length;i++){
      if(id === list[i].id){
        list.splice(i,1);
        return list;
      }
    }
    return list;
  },
  // cloneDeep(obj){
  //   return _.cloneDeep(obj)
  // },
  onValidNumber(number){
    let re = /^\d+$/
    let num = number
    if(!re.test(num) || num == '' || num==null || num ==undefined){
      num = 0;
    }
    return num
  },
  // 乘法  
  // accMul (arg1,arg2)   {   
  //   var m=0,s1=arg1.toString(),s2=arg2.toString();   
  //   try{m+=s1.split(".")[1].length}catch(e){}   
  //   try{m+=s2.split(".")[1].length}catch(e){}   
  //   return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)   
  // },
  // // 加法
  // accAdd (arg1,arg2){   
  //   var r1,r2,m;   
  //   try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}   
  //   try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}   
  //   m=Math.pow(10,Math.max(r1,r2));
  //   var n=Math.max(r1,r2);
  //           n>2?n=2:n;/*money最多保留两位小数*/  
  //   return ((arg1*m+arg2*m).toFixed(n))/m   
  // } ,
  buildParams(params){
    var str = ''
    for(var key in params){
      str += key+'='+params[key]+"&"
    }
    str = str.substr(0,str.length-1)
    return "?"+str
  }
}
module.exports = utils












