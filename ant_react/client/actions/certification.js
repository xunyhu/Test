import {get,post} from './../utils/httpFetch'
import utils from './../utils'
export const  GET_FOOD_STATUS = "GET_FOOD_STATUS";
export const  GET_PUBLICATION_STATUS = "GET_PUBLICATION_STATUS";
export const  GET_PHONE_STATUS = "GET_PHONE_STATUS";

//获取食品经营认证初始状态
export function getFoodStatus(data, callback=(json)=>{}){
  return post(utils.url.getAuthStatus, data,callback, (json)=>{
    return {
      type : GET_FOOD_STATUS,
      json
    }
  })
}

//获取出版物经营认证初始状态
export function getPublicationStatus(data, callback=(json)=>{}){
  return post(utils.url.publicationAuth, data,callback, (json)=>{
    return {
      type : GET_PUBLICATION_STATUS,
      json
    }
  })
}

//获取电话卡认证初始状态
export function getPhoneStatus(data, callback=(json)=>{}){
  return post(utils.url.phonecardAuth, data,callback, (json)=>{
    return {
      type : GET_PHONE_STATUS,
      json
    }
  })
}


