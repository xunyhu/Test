// 编辑商品
import {
  ORDER_LIST,
} from '../constants/order'
import {fromJS} from 'immutable'
import utils from '../utils'
function requestSuccess(data,type){
  return {
    type : type,
    data : data
  }
}

// 订单列表
export const getOrderList=(url,params)=>{
  return (dispatch,state)=>{
    utils.get(url+utils.buildParams(params))
    .then(res=>{
      if(res.errorCode!=0){
        utils.msg(res.errorMsg,res.errorCode)
      }
      let data = {
        ...res.result,
        checkIds :[],
        allCheck : false , // 全选checkbox，默认为不全选
        indeterminate:false,
        pageSize:params['page.pageSize'], // 当前分页条数
        currentPage : params['page.currentPage'] // 当前页码
      }
      return dispatch(requestSuccess(data,ORDER_LIST))
    })
  }
}



/*
  checked : bool  
  全选，批量改变订单选中的状态
*/ 
export const onOrderAllChecked = checked=>{
  return (dispatch,state)=>{
    let options = state().orderListData.toJS()
    let {data,checkIds} = options
    checkIds = []
    data = data.map(item=>{
      item.checked = checked // 商品是否选中
      if(checked ) checkIds.push(item.id)

      return item
    })

    options.data = data
    options.checkIds = checkIds
    options.allCheck = checked

    return dispatch(requestSuccess(options,ORDER_LIST))
  }
}

/*
  idx : number 
  改变对应订单的选中状态，同时改变是否全选的状态
*/
export const onOrderChecked = (idx)=>{
  return (dispatch,state)=>{
    let options = state().orderListData.toJS()
    let {data,checkIds} = options
    checkIds = []
    data = data.map((item,i)=>{
      let checked  = item.checked
      if(i===idx) item.checked = !checked // 判断索引，改变商品选中状态
      if(item.checked)  checkIds.push(item.id) // 改变状态后，加入选中的记录列表
      return item
    })

    options.data = data
    options.checkIds = checkIds
    options.allCheck = checkIds.length==data.length
    return dispatch(requestSuccess(options,ORDER_LIST))
  }
}



// 批量配货
export const batchDistribution=(params,i)=>{
  return (dispatch,state)=>{
    let options = state().orderListData.toJS()
    utils.post(utils.url.batchDistribution,params)
    .then(res=>{
      if(res.errorCode!=0){
        utils.msg(res.errorMsg,res.errorCode)
        return dispatch(requestSuccess(options,ORDER_LIST))
      }else{
        let {data} = options
        if(i<0){   //批量操作
          data = data.map((item,i)=>{
            let checked  = item.checked
            if(item.checked) {
              item.outbound=1
              item.checked=!checked
            }
            return item
          })
          options.data = data
          options.checkIds = []
          options.allCheck = false
        }else{   //单个数据操作
          data[i].outbound=1
          options.data=data
        }
        
        return dispatch(requestSuccess(options,ORDER_LIST))
      }
    })
  }
}















