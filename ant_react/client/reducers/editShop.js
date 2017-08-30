// 编辑商品
import {
  EDIT_SHOW_IMAGES,
  EDIT_SHOW_SKU,
  EDIT_SHOW_INFO,
  EDIT_SHOW_TABLE,
  EDIT_SHOW_CLEAR
} from '../constants/editShop'
import { createReducer } from 'redux-immutablejs'
import immutable, { fromJS } from 'immutable'

// 商品属性
export const editShowSku = createReducer(fromJS({}), {
  [EDIT_SHOW_SKU]: (state, action) => {
    return fromJS(action.data)
  },
  [EDIT_SHOW_CLEAR]:(state,action)=>{
    return fromJS(action.data)
  }
})

// 商品sku列表
export const editShowSkuTable = createReducer(fromJS([]),{
  [EDIT_SHOW_TABLE]: (state, action) => {
    return fromJS(action.data)
  },
  [EDIT_SHOW_CLEAR]:(state,action)=>{
    return fromJS([])
  }
})

// 商品图片
const initImage = fromJS({
  imageUrl:'',//商品主图
  goodsImgUrls:[
  ] //  商品图片
})
export const editShowImages = createReducer(initImage, {
  [EDIT_SHOW_IMAGES]: (state, action) => {
    return fromJS(action.data)
  },
  [EDIT_SHOW_CLEAR]:(state,action)=>{
    return initImage
  }
})


// 商品基本信息
const initInfo = fromJS({
  categoryId:'', // 商品分类
  commission :0 , //佣金
  goodsName:'', //商品名称
  price:0, //价格
  detail:[], //  商品描述
  brandId : '0' , //商品品类，超级后台维护
  // brandName : '',//品类
  goodsStock : 0, // 商品库存
  status:1, //审核,上架 0为上架，1为下架
  isRecommend : 0,  // 店长推荐标识 是否推荐，0为不推荐，1为推荐
  freeDelivery :0,  //是否包邮(0代表不包邮,1代表包邮)
  freightTemplateId : '' , //关联运费模板ID
  weight : 0, // 商品重量,以kg为单位,
  goodsType: 1, // 0:自营;1:网红商品;2:为第三方平台
  moneyType:0,
  tag:0,//商品标签
  shareFlag:0,// 是否分享得佣金 shareFlag=0，没有分享佣金，shareFlag=1有分享佣金
  shareCommision :0, // 分享佣金金额 shareFlag=0是隐藏
  supplierCode:'',//供应商code
  supplierName:'',//供应商名称
  brandId:'',//品牌ID
  brandName:'',//品牌名称

  // isCanAgent:1, // 0:可以代理,1:已经代理，不能修改
  // sAgent，1-已分销，0-未分销
})
export const editShowInfo = createReducer(initInfo, {
  [EDIT_SHOW_INFO]: (state, action) => {
    return fromJS(action.data)
  },
  [EDIT_SHOW_CLEAR]:(state,action)=>{
    return initInfo
  }
})


