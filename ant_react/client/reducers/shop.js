import {
  GET_SHOP_INFO,
  GET_SHOP_CATEGORY,
  LIST_SUPPLIER,
  LIST_BRAND,
} from '../constants/shop'
import { createReducer } from 'redux-immutablejs'
import immutable, { fromJS } from 'immutable'

// 店铺信息
const initShopInfo = fromJS({
  "name": "",
  "userId": 0,
  "reductionMode": -1,
  "shopStatus": 0,
  "directsaleStatus": 0,
  "otherServiceStatus": 0,
  "servicePhone": null,
  "isCompany": 0,
  "shopType": 1,
  "notice": null,
  "shopIcon": "",
  "deleteFlag": 0,
  "autoConfirmDays": 15,
  "isPromiseTransaction": 0,
  "isPromiseReverse": 0,
  "isWeiboAuth": 0,
  "isHonestyAuth": 0,
  "isPhysicalStoreAuth": 1
})
export const getShopInfo = createReducer(initShopInfo, {
  [GET_SHOP_INFO]: (state, action) => {
    return fromJS(action.data)
  }
})
export const getShopCategory = createReducer(fromJS([]),{
  [GET_SHOP_CATEGORY]: (state, action) => {
    return fromJS(action.data)
  }
}) 

export const getListSupplier = createReducer(fromJS([]),{
  [LIST_SUPPLIER]: (state, action) => {
    return fromJS(action.data)
  }
})

export const BrandList = createReducer(fromJS([]),{
  [LIST_BRAND]: (state, action) => {
    return fromJS(action.data)
  }
})










