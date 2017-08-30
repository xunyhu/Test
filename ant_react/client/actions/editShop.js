// 编辑商品
import {
  EDIT_SHOW_IMAGES,
  EDIT_SHOW_SKU,
  EDIT_SHOW_INFO,
  EDIT_SHOW_TABLE,
  EDIT_SHOW_CLEAR,
} from '../constants/editShop'
import {fromJS} from 'immutable'
import utils from '../utils'
function requestSuccess(data,type){
  return {
    type : type,
    data : data
  }
}

// 获取商品详情与商品sku值
export const getShopDetail = (actions,params)=>{
  return (dispatch,state)=>{
    
    utils.get(utils.url.goodsGet+utils.buildParams(params))
    .then(res=>{
      if(res.errorCode==0){
        let data = res.result
        data.freeDelivery = +(data.freeDelivery)
        actions.setEditShowImages({
          imageUrl:data.imageUrl,
          goodsImgUrls:data.goodsImgUrls,
        })
        // delete data.isCanAgent
        delete data.imageUrl
        delete data.goodsImgUrls
        // if(!Array.isArray(data.detail)){
        //   data.detail = []

        // }
        data.detail = JSON.parse(data.detail)
        
        actions.setEditShowInfo(data)
      }
    })

    utils.get(utils.url.listSkuByGoods+utils.buildParams(params))
    .then(res=>{
      if(res.result.length){
        return dispatch(requestSuccess(res.result,EDIT_SHOW_TABLE))
      }

    })
  }
}

// 清空编辑商品的数据
export const clearShopDetail = ()=>{
  return (dispatch,state)=>{
    return dispatch(requestSuccess({},EDIT_SHOW_CLEAR))
  }
}

// 商品图片
export const setEditShowImages=(data)=>{
  return (dispatch,state)=>{
    return dispatch(requestSuccess(data,EDIT_SHOW_IMAGES))
  }
}
// 商品基本信息
export const setEditShowInfo=(data)=>{
  return (dispatch,state)=>{
    return dispatch(requestSuccess(data,EDIT_SHOW_INFO))
  }
}


// 选择商品属性值交叉组合
function skuBuild(goodsSkus){
  var first = goodsSkus[0]
  var skuList = []
  for(var j=0;j<first.values.length;j++){
    skuList.push({
      price:'',
      imgUrl : null,
      skuStock : '',
      goodsCode : '',
      attrIds:[first.id,first.values[j]['id']].join(utils.splitAttrVal),
      attrValues : [first.attrName,first.values[j]['attrValue']].join(utils.splitAttrVal)
    })
  }
  for(var i=1;i<=goodsSkus.length;i++){
    if(goodsSkus[i]){
      skuList = newSku(skuList,goodsSkus[i])
    }
  }
  return skuList
}

function newSku(skuList,skus){
  var list = []
  for(var i=0;i<skuList.length;i++){
    var skuItem = skuList[i]
    for(var j=0;j<skus.values.length;j++){
      var attrId = [skus.id,skus.values[j]['id']].join(utils.splitAttrVal) // 属性与属性值用冒号(:)隔开
      var attrValue = [skus.attrName,skus.values[j]['attrValue']].join(utils.splitAttrVal) // 属性与属性值用冒号(:)隔开
      var obj = {
        ...skuItem,
        attrIds: [skuItem.attrIds,attrId].join(utils.splitAttr), // 属性与属性之间用分号(;)隔开
        attrValues : [skuItem.attrValues,attrValue].join(utils.splitAttr)// 属性与属性之间用分号(;)隔开
      }
      list.push(obj)
    }
  }
  return list
}

// 商品sku列表
export const setEditShowSkuTable=(data)=>{
  return (dispatch,state)=>{
    let list = fromJS(data).toJS()  // 数据深复制 ，防止引用类型数据被改动
    
    // 过滤选中的属性与属性值
    list = list.reduce((arr,next)=>{
      let { values } = next
      values = values.reduce((arr,next)=>{
        if(next.isChoose){
          arr.push(next)
        }
        return arr
      },[])
      next.values = values
      arr.push(next)
      return arr
    },[])
    let goodsSkus = fromJS(list).toJS()

    // 选择的属性之后，对数据进行交叉组合
    let skuList = skuBuild(goodsSkus)
    return dispatch(requestSuccess(skuList,EDIT_SHOW_TABLE))

  }
}
export const updateSkuTable = data=>{
  return (dispatch,state)=>{
    return dispatch(requestSuccess(data,EDIT_SHOW_TABLE))
  }
}



