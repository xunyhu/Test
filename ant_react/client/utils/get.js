
import fetch from 'isomorphic-fetch'
import msg from './message'
import * as storage from './storage'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

module.exports = (url)=>{

  return (function(url){
   /* let {shop} = storage.getUserInfo()
    if(shop){
      var shopId = shop.id
    
      let urlList = url.split('?')
      if(urlList.length>1){
        let str = urlList[1].indexOf('id=')>-1 ? '&shopId='+shopId:'&id='+shopId+'&shopId='+shopId
        urlList[1] = urlList[1]+str
      }else{
        urlList.push('id='+shopId+'&shopId='+shopId)
      }
      url = urlList.join('?')
    }*/
    var headers = new Headers();
    return fetch(url,{
        credentials: 'same-origin',
        headers:headers
    })
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      if(res.errorCode==1){
        // msg(res.errorMsg,res.errorCode)
        appHistory.push('Login')
      }
      return res;
    })
    .catch(e=>{
      return { code:-1,data:{},message:"请求失败，请重新操作"}
    })
  })(url)
}