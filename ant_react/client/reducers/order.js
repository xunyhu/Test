// 编辑商品
import {
  ORDER_LIST
} from '../constants/order'
import { createReducer } from 'redux-immutablejs'
import immutable, { fromJS } from 'immutable'

// 订单列表
const initOrderList = fromJS({
  pageSize:20,// 当前分页条数
  currentPage : 1,// 当前页码
  totalCount : 0, // 总订单记录数
  allCheck :false, // 全选checkbox，默认为不全选
  data:[], // 订单列表
  checkIds : [] , // 选中订单记录的id数组
})
export const orderListData = createReducer(initOrderList, {
  [ORDER_LIST]: (state, action) => {
    return fromJS(action.data)
  }
})

