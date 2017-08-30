

import fetch from 'isomorphic-fetch'
import * as storage from './storage'
// import { browserHistory } from 'react-router/es6'
function param(obj) {
  var query = '',
      name, value, fullSubName, subName, subValue, innerObj, i;

  for (name in obj) {
      value = obj[name];

      if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
              subValue = value[i];
              fullSubName = name + '[' + i + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
          }
      } else if (value instanceof Object) {
          for (subName in value) {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
          }
      } else if (value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
  }
  return query.length ? query.substr(0, query.length - 1) : query;
}

const response = (res)=>{
  var token = res.headers.get('wesale-token')
  if(res.ok){
    return res.json();
  }else{
    return {};
  }
}
export const post = (url,data={})=>{

  let {shop} = storage.getUserInfo()
  if(shop){
    var shopId = shop.id
    data.shopId = shop.id
  }
  let query = param(data);
  var headers = new Headers();
  headers.append('Accept', 'application/x-www-form-urlencoded;charset=utf-8');
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  return (function(url,data){
    return fetch(url,{
      method: 'POST',
      credentials: 'same-origin',
      headers : headers,
      body:query
    })
    .then(response)
    .then((res)=>{
      if(res.errorCode===undefined&&res.code !== 0){
      }else if(res.code === undefined&&res.errorCode!==0){
      }
      return res;
    })
  })(url,data)
}

export const postJson = (url,data)=>{
  var headers = new Headers();
  return (function(url,data){
    return fetch(url,{
      method: 'POST',
      credentials: 'same-origin',
      headers : headers,
      body:JSON.stringify(data)
    })
    .then(response)
    .then((res)=>{
      if(res.errorCode===undefined&&res.code !== 0){
      }else if(res.code === undefined&&res.errorCode!==0){
      }
      return res;
    })
  })(url,data)
}