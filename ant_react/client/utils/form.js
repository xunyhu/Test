

import fetch from 'isomorphic-fetch'
module.exports = (url,data)=>{

  var headers = new Headers();
  return (function(url,data){
    return fetch(url,{
      method: 'POST',
      credentials: 'same-origin',
      headers,
      body:data
    })
    .then((res)=>{
      if(res.ok){
        return res.json();
      }else{
        return {};
      }
    })
    .then((res)=>{
      if(res.errorCode===undefined&&res.code !== 0){
      }else if(res.code === undefined&&res.errorCode!==0){
      }
      return res;
    })
    .catch(e=>{
      return { errorCode:-1,data:{},errorMsg:"请求失败，请重新操作"}
    })
  })(url,data)
  
}