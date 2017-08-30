

import store from 'store'

const key = "tudou_api_"
const keys = {

  /*
    * 请求写在请求头的token时，
    * 退出登录时清除
  */
  userInfo : key+'_api_user_info',
}

/***用户token start***/
export function getUserInfo(){
  return store.get(keys.userInfo) || {}
}
export function setUserInfo (data){
  store.set(keys.userInfo,data);
  return data
}
export function removeUserInfo (){
  store.remove(keys.userInfo);
}
/***用户token end***/

/***用户token start***/
// export function getApiToken(){
//   return store.get(keys.apiToken) || token
// }
// export function setApiToken (token){
//   store.set(keys.apiToken,token);
//   return token
// }
// export function removeApiToken (){
//   store.remove(keys.apiToken);
// }
/***用户token end***/


//退出时，清空本地数据
export const clearAllWithLogout=()=>{
  removeUserInfo()
  store.clear()
}










