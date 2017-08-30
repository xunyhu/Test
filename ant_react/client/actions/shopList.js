// 编辑商品
import {
  SHOP_LIST_TOTAL,
} from '../constants/shopList'
import {fromJS} from 'immutable'
import utils from '../utils'
function requestSuccess(data,type){
  return {
    type : type,
    data : data
  }
}

// 商品列表
export const getShopList=(params)=>{
  return (dispatch,state)=>{
    
    utils.get(utils.url.goodsList+utils.buildParams(params))
    .then(res=>{
      if(res.errorCode!=0){
        utils.msg(res.errorMsg,res.errorCode)
      }
      let data = {
        ...res.result,
        checkIds :[],
        allCheck : false , // 全选checkbox，默认为不全选
        pageSize:params['page.pageSize'], // 当前分页条数
        currentPage : params['page.currentPage'] // 当前页码
      }
      return dispatch(requestSuccess(data,SHOP_LIST_TOTAL))
    })
  }
}

// 删除商品，删除成功后移除商品列表的商品记录，
export const onDeleteShop = params=>{
  return (dispatch,state)=>{
    let options = state().shopListData.toJS()
    let {data,checkIds,totalCount} = options
    utils.get(utils.url.goodsDelete+utils.buildParams(params))
    .then(res=>{
      if(res.errorCode==0){
        data.splice(params.index,1) // 移除需要删除的记录
        totalCount -= 1 // 删除成功后，总记录条数减1,
        options.data = data
        options.totalCount = totalCount

        //需要删除的商品ID，查找选中的商品ID数组记录，查找到有记录则删除
        let index = checkIds.indexOf(params.id) 
        if(index>-1){
          checkIds.splice(index,1)
          options.checkIds = checkIds
        }
      }
      utils.msg(res.errorMsg,res.errorCode)
      return dispatch(requestSuccess(options,SHOP_LIST_TOTAL))
    })
  }
}

/*
  checked : bool  
  全选，批量改变商品选中的状态
*/ 
export const onShopAllChecked = checked=>{
  return (dispatch,state)=>{
    let options = state().shopListData.toJS()
    let {data,checkIds} = options
    checkIds = []
    data = data.map(item=>{
      //自营商品才可以进行全选操作
      if(item.goodsType==1){
        item.checked = checked // 商品是否选中
        if(checked ) checkIds.push(item.id)
      }
      
      return item
    })

    options.data = data
    options.checkIds = checkIds
    options.allCheck = checked

    return dispatch(requestSuccess(options,SHOP_LIST_TOTAL))
  }
}

/*
  idx : number 
  改变对应商品的选中状态，同事改变是否全选的状态
*/
export const onShopChecked = (idx)=>{
  return (dispatch,state)=>{
    let options = state().shopListData.toJS()
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
    return dispatch(requestSuccess(options,SHOP_LIST_TOTAL))
  }
}

/*
  status : bool  1:下架;0:上架
  批量修改商品上下架
*/
export const onBatchUpAndDown = status=>{
  return (dispatch,state)=>{
    let options = state().shopListData.toJS()
    let {data,checkIds} = options
    utils.post(utils.url.goodsBatchUpAndDown,{
      goodsIds :options.checkIds.join(';'),
      agentGoodsStatus:status
    })
    .then(res=>{
      utils.msg(res.errorMsg,res.errorCode)
      if(res.errorCode==0){
        // 操作成功后，批量修改本地的状态
        data = data.map((item,i)=>{
          item.status = status
          item.checked = false
          return item
        })
        checkIds = []
        options.data=data
        options.checkIds=checkIds
        options.allCheck = false
        return dispatch(requestSuccess(options,SHOP_LIST_TOTAL))
      }else{
        return dispatch(requestSuccess(options,SHOP_LIST_TOTAL))
      }
    })
  }
}

/*
  status : bool  1:下架;0:上架
  单个商品上下架操作
*/
export const onOneUpAndDown = item=>{
  let status = +(!item.status)
  return (dispatch,state)=>{
    let options = state().shopListData.toJS()
    let {data} = options
    utils.post(utils.url.goodsBatchUpAndDown,{
      goodsIds :item.id,
      agentGoodsStatus:status
    })
    .then(res=>{
      utils.msg(res.errorMsg,res.errorCode)
      if(res.errorCode==0){
        // 操作成功后，批量修改本地的状态
        data = data.map((_item,i)=>{
          if(_item.id == item.id){
            _item.status = status
          }
          return _item
        })
        options.data=data
        options.checkIds=[]
        options.allCheck = false
        return dispatch(requestSuccess(options,SHOP_LIST_TOTAL))
      }else{
        return dispatch(requestSuccess(options,SHOP_LIST_TOTAL))
      }
    })
  }
}
















