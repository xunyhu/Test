// 编辑商品
import {
  SHOP_LIST_TOTAL
} from '../constants/shopList'
import { createReducer } from 'redux-immutablejs'
import immutable, { fromJS } from 'immutable'

// 商品列表
const initShopList = fromJS({
  pageSize:20,// 当前分页条数
  currentPage : 1,// 当前页码
  totalCount : 0, // 总商品记录数
  allCheck :false, // 全选checkbox，默认为不全选
  data:[], // 商品列表
  checkIds : [] , // 选中商品记录的id数组
})
export const shopListData = createReducer(initShopList, {
  [SHOP_LIST_TOTAL]: (state, action) => {
    return fromJS(action.data)
  }
})

