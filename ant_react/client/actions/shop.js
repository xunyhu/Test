import {
  GET_SHOP_INFO,
  GET_SHOP_CATEGORY,
  LIST_SUPPLIER,
  LIST_BRAND,
} from '../constants/shop'
import utils from './../utils'

function requestSuccess(data,type){
  return {
    type : type,
    data : data
  }
}

export const getShopInfo=(actions,config={readCache:false,clear:false,callback:()=>{}})=>{
  return (dispatch,state)=>{
    const {shop,user} =utils.storage.getUserInfo() //state().getShopInfo.toJS()
    if(config.clear){
      return dispatch(requestSuccess({},GET_SHOP_INFO))
    }
    if(shop&&shop.id&&config.readCache) { 
      if(config.callback!=undefined && typeof(config.callback)=='function')
        config.callback(shop)
      return dispatch(requestSuccess(shop,GET_SHOP_INFO))
    }
    return utils.get(utils.url.getShop+'?id=1',actions)
    .then(data=>{
      if(data.errorCode === 0){
        if( config.callback!=undefined && typeof(config.callback)=='function'){
          config.callback(data.result)
        }
        
        return dispatch(requestSuccess(data.result,GET_SHOP_INFO))
      }else{
        return null
      }
    })
    
  }
}

// 更新店铺
export function updateShopInfo(shopInfo){
  return (dispatch,state)=>{
    return dispatch(requestSuccess(shopInfo,GET_SHOP_INFO))
  }
}

// 获取店铺商品分类列表
export const getShopCategory=(config={cache:false})=>{
  return (dispatch,state)=>{
    let options = state().getShopCategory.toJS()
    if(config.cache&&options.length){
      options = options.reduce((arr,item)=>{
        if(item.id!=-1){
          arr.push(item)
        }
        return arr
      },[])
      return dispatch(requestSuccess(options,GET_SHOP_CATEGORY))
    }
    utils.get(utils.url.categoryList+"?isGive=1")
    .then(res=>{
      if(res.errorCode==0){
        return dispatch(requestSuccess(res.result,GET_SHOP_CATEGORY))
      }
    })
  }
}


// 获取供应商
export const getListSupplier=(config={cache:false})=>{
  return (dispatch,state)=>{
    let options = state().getListSupplier.toJS()
    if(config.cache&&options.length){
      return dispatch(requestSuccess(options,LIST_SUPPLIER))
    }
    utils.get(utils.url.listSupplierList)
    .then(res=>{
      if(res.errorCode==0){
        return dispatch(requestSuccess(res.result,LIST_SUPPLIER))
      }
    })
  }
}


// 品牌
export const getBrandList=(config={cache:false})=>{
  return (dispatch,state)=>{
    let options = state().BrandList.toJS()
    if(config.cache&&options.length){
      return dispatch(requestSuccess(options,LIST_BRAND))
    }
    utils.get(utils.url.brandList)
    .then(res=>{
      if(res.errorCode==0){
        return dispatch(requestSuccess(res.result,LIST_BRAND))
      }
    })
  }
}



// 新增一个商品分类
export const addShopCategory = ()=>{
  return (dispatch,state)=>{
    let options = state().getShopCategory.toJS()
    let res={
      id:-1,
      categoryName:'',
      isShow:0,
      createDt : '今天'
    }
    options.push(res)
    return dispatch(requestSuccess(options,GET_SHOP_CATEGORY))
  }
}

// 更新商品分类
export const updateShopCategory = data=>{
  return (dispatch,state)=>{
    return dispatch(requestSuccess(data,GET_SHOP_CATEGORY))
  }
}
// 删除商品分类
export const deleteShopCategory = (index,item)=>{
  return (dispatch,state)=>{
    let list = state().getShopCategory.toJS()
    utils.get(utils.url.categoryDelete+"?id="+item.id)
    .then(res=>{
      if(res.errorCode==0){
        list.splice(index,1)
      }
      return dispatch(requestSuccess(list,GET_SHOP_CATEGORY))
      utils.msg(res.errorMsg,res.errorCode)
    })
  }
}



















