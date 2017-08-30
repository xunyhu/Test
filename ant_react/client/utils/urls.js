// import config from '../../config'
const env = process.env.NODE_ENV
const DEBUG = (env === "production") // 区分是否生产环境和开发环境
// const port = config[env]['port'] // 获取端口号
// const local = "http://localhost:"+port+"/"

// 打包压缩代码上传测试服务器与正式服务后，请求api的路径区分
let path  = DEBUG ? '../api': 'SibuXwsApi/api'
let json  = DEBUG ? '../api': 'SibuXwsApiJson/api'
let file  = DEBUG ? '../api': 'SibuXwsApiFile/api'
let fileM = DEBUG ? '../api': 'SibuXwsApiFileM/api'

let pathLogin = DEBUG ? '': 'SibuXwsApi' // 接口不需要登录验证

const url =  {

  "sendsms"  : pathLogin+'/visitor/sendsms', //获取登录时的手机验证码
  "login"    : pathLogin+'/login', //用户登录
  "logout"   : pathLogin+'/admin/logout', //退出登录



  "cmsGetCategory"    : pathLogin+"/cms/getCategory",// cms分类
  "getArticelForPage" : pathLogin+'/cms/getArticelForPage' , //cms article 列表 ?categoryId=9
  "getArticelDetail"  : pathLogin+'/cms/getArticelDetail', //?id=1

  "sellerOrder": path+"/sellerOrder/page",  //订单列表
  "sellerOrderDetail":path+"/sellerOrder/get",//订单详情
  "orderCount":path+"/sellerOrder/orderCount", //各个订单状态下的订单数量
  "orderDelivery" :path+"/sellerOrder/delivery",//订单发货

  "categoryList":path+"/category/list",//卖家分类列表
  "categoryAdd":path+"/category/add",//添加卖家分类
  "categoryEdit":path+"/category/edit",//编辑卖家分类
  "categoryDelete":path+"/category/delete",//删除卖家分类

  "brandList":path+"/brand/list", // 获取商品品牌
  "listSupplierList":path+"/brand/listSupplier", // 供应商列表
  
  "platform":path+"/category/platform", //获取商品品牌 (新)
  "goodsAdd":path+"/goods/add",//添加卖家商品
  "goodsEdit":path+"/goods/edit",//编辑卖家商品
  "goodsDelete":path+"/goods/delete",//删除卖家商品
  "goodsGet":path+"/goods/get",//获取卖家商品详情
  "goodsList":path+"/goods/page",//分页商品列表
  "goodsAgent":path+"/goods/agent",//代理商品
  "goodsBatchUpAndDown":path+"/goods/batchUpAndDown",//批量上下架商品【0为上架，1为下架】
  "goodsAddCategory":path+"/goods/batchAddCategory",//批量将商品添加到分类
  "goodsCancelAgent":path+"/goods/cancelAgent",//取消代理商品
  "saveUpdateSku":json+"/sku/saveUpdateSku",//添加卖家商品sku
  "listSkuByGoods":path+"/sku/listSkuByGoods",//获取商品sku
  "photoUpload":file+"/upload/photoUpload",//图片上传
  "batchUploadSortedImg":fileM+'/upload/batchUploadSortedImg',  // 批量上传图片并排序


  "attrValueAdd":path+"/attrValue/add",//添加卖家属性值
  "attrValueEdit":path+"/attrValue/edit",//编辑卖家属性值
  "attrValueDelete":path+"/attrValue/delete",//删除卖家属性值
  "attrValueList":path+"/attrValue/list",//某属性的属性值列表


  "attrList":path+"/attr/list",//获取卖家属性
  "attrAdd":path+"/attr/add",//添加卖家属性
  "attrEdit":path+"/attr/edit",//编辑卖家属性
  "attrDelete":path+"/attr/delete",//删除卖家属性
  "selectAttrList":path+"/attrValue/selectAttr",//获取属性及属性值列表


  "shopCreate":path+"/shop/create",//创建店铺
  "switchReductionMode":path+"/shop/switchReductionMode",//店铺库存扣减模式切换
  "switchReversePromise":path+"/shop/switchReversePromise",//店铺退货保障开关
  "switchTransactionPromise":path+"/shop/switchTransactionPromise",//店铺交易担保开关
  "updateAutoConfirm":path+"/shop/updateAutoConfirm",//店铺自动确认收货
  "updateShopName":path+"/shop/updateShopName",//店铺名称修改
  "updateShopImg":path+"/shop/updateShopImg",//店铺头像修改
  "getShop":path+"/shop/getShop",//获取店铺信息
  "updateShopPhone":path+"/shop/updateShopPhone",//店铺客服电话修改
  "getProfitTotal":path+"/profitTotal/get",//总收益信息获取
  "applyWithdrawCash":path+"/withdrawCash/apply",//申请提现
  "haveShop":path+"/shop/haveShop",//主播是否有店铺
  "withdrawCashList":path+"/withdrawCash/page",//提现记录分页
  "updateShopNotice":path+"/shop/updateShopNotice",//更新店铺公告
  "outcomePage":path+"/fund/outcomePage",//收支明细-支出列表
  "unfreezePage":path+"/fund/unfreezePage",//收支列表-冻结/解冻
  "fundAllPage":path+"/fund/allPage",//收支明细-全部
  "incomePage":path+"/fund/incomePage",//收支明细-收入列表



  "qualificationsAdd"         : path+"/qualifications/physicalStoreAuth/add",//新增实体店认证
  "qualificationsEdit"        : path+"/qualifications/physicalStoreAuth/edit",//修改实体店认证
  "qualificationsQuery"       : path+"/qualifications/physicalStoreAuth/query",//查询实体店认证
  "qualificationsQueryByShop" : path+"/qualifications/physicalStoreAuth/queryByShop",//根据店铺去查询实体店认证
  "foodManagementAuthAdd":path+"/qualifications/foodManagementAuth/add",//新增食品经营认证
  "foodManagementAuthEdit":path+"/qualifications/foodManagementAuth/edit",//修改食品经营认证
  "foodManagementAuthQuery":path+"/qualifications/foodManagementAuth/query",//查询食品经营认证
  "foodManagementAuthQueryByShop":path+"/qualifications/foodManagementAuth/queryByShop",//根据店铺查询食品经营认证
  "publicationAuthAdd":path+"/qualifications/publicationAuth/add",//新增出版物认证
  "publicationAuthEdit":path+"/qualifications/publicationAuth/edit",//修改出版物认证
  "publicationAuthQuery":path+"/qualifications/publicationAuth/query",//查询出版物认证
  "publicationAuthQueryByShop":path+"/qualifications/publicationAuth/queryByShop",//根据店铺查询出版物认证
  "phonecardAuthAdd":path+"/qualifications/phonecardAuth/add",//新增电话卡审核
  "phonecardAuthEdit":path+"/qualifications/phonecardAuth/edit",//修改电话卡审核
  "phonecardAuthQuery":path+"/qualifications/phonecardAuth/query",//查询电话卡审核
  "phonecardAuthQueryByShop":path+"/qualifications/phonecardAuth/queryByShop",//根据店铺查询电话卡审核
  "physicalStoreAuthDel":path+"/qualifications/physicalStoreAuth/del",//删除实体店认证
  "foodManagementAuthDel":path+"/qualifications/foodManagementAuth/del",//删除食品经营认证
  "publicationAuthDel":path+"/qualifications/publicationAuth/del",//删除出版物认证
  "phonecardAuthDel":path+"/qualifications/phonecardAuth/del",//删除电话卡审核

  "getFreeTemplate":path+"/freightTemplate/getFreeTemplate",//获取免邮模板
  "updateFreeTemplate":path+"/freightTemplate/updateFreeTemplate",//更新免邮模板
  "addTemplate":json+"/freightTemplate/addTemplate",//添加运费模板
  "getTemplate":path+"/freightTemplate/getTemplate",//获取运费模板
  "updateTemplate":json+"/freightTemplate/updateTemplate",//更新运费模板
  "deleteDetail":path+"/freightTemplate/deleteDetail",//删除模板的子区域
  "deleteTemplate":path+"/freightTemplate/deleteTemplate",//删除运费模板
  "freightTemplateList":path+"/freightTemplate/page",//分页获取运费模板


  "categorySelfPlat":path+"/category/selfplat",  //供货平台分类
  "agentPageList":path+"/goods/agentpage",// 供货商品列表

  "shopAccountGet": path+"/shopAccount/get" , //店铺获取银行卡
  "shopAccountUpdate" : path+"/shopAccount/update", //店铺更新银行卡
  "shopAccountAdd" : path+"/shopAccount/add",//店铺绑定银行卡、
  "bankList" : path+'/bank/list',//银行列表

  "queryRefundPage" : path+"/refund/queryRefundPage",//商家退款列表
  "queryRefundProgress" :path+"/refund/queryRefundProgress",//退单流程
  "RefundAgree" :path+"/refund/agree",//同意退款
  "RefundRefuse" :path+"/refund/refuse",//不同意退款
  "batchDistribution" :path+"/sellerOrder/batchDistribution" ,//批量配货
  "getRefundOrder":path+"/refund/getRefundOrder",//退单详情


  "getAuthStatus" :path+"/qualifications/foodManagementAuth/getAuthStatus", //食品认证
  "publicationAuth":path+"/qualifications/publicationAuth/getAuthStatus", //出版物认证
  "phonecardAuth":path+"/qualifications/phonecardAuth/getAuthStatus", //手机卡

  "getReturnAddres":path+"/returnAddress/get", // 获取退货地址
  "returnAddUpdate":path+"/returnAddress/addAndUpdate",// 添加/更新店铺退货地址

  "listGoodsSaleNum" :path+"/goods/listGoodsSaleNum",//报表
  "goodExcel" :path+"/export/goodExcel",//导出商品
  "orderExcel":pathLogin+"/export/orderExcel",//导出订单
  "deliveryOrder":file+"/import/deliveryOrder",//批量发货，上传文件

}

module.exports = url
