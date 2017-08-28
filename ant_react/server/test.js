

var request = require("request");

var options = { 
  method: 'POST',
  url: 'http://120.76.137.184:8080/live/api/sku/saveUpdateSku',
  headers: 
   { 'postman-token': '8d8ff7d9-a395-cafd-e52e-c48e452b9e08',
     'cache-control': 'no-cache',
     'content-type': 'application/json',
     token: 'sI6EEuhEfZlufsE8IrGc2lgXuOsff73CkCSLofX2uz*3Z2U7zyyn3VnztSb: LYBzybev4*7VBP4SqjbpSl1hhw__' },
  body: 
   { goodsId: 132,
     goodsSkus: 
      [ 
        { price: 0,
          skuStock: 0,
          goodsCode: '',
          attrIds: '30:20',
          attrValues: '颜色:蓝' } 
      ] 
  },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


// var goodsSkus = [{
//   "id": 30,
//   "attrName": "颜色",
//   "sortIndex": "255",
//   "values": [{
//     "id": 20,
//     "attrId": 30,
//     "attrValue": "蓝",
//     "isChoose": true
//   }, {
//     "id": 74,
//     "attrId": 30,
//     "attrValue": "红色",
//     "isChoose": true
//   }, {
//     "id": 75,
//     "attrId": 30,
//     "attrValue": "紫色",
//     "isChoose": true
//   }]
// }, {
//   "id": 70,
//   "attrName": "尺寸",
//   "sortIndex": "255",
//   "values": [{
//     "id": 81,
//     "attrId": 70,
//     "attrValue": "M码",
//     "isChoose": true
//   }, {
//     "id": 82,
//     "attrId": 70,
//     "attrValue": "S码",
//     "isChoose": true
//   }, {
//     "id": 95,
//     "attrId": 70,
//     "attrValue": "L码",
//     "isChoose": true
//   }]
// }]
// function arr(goodsSkus){
//   var heads = goodsSkus[0]
//   var skuList = []
//   for(var j=0;j<heads.values.length;j++){
//     skuList.push({
//       attrIds:[heads.id,heads.values[j]['id']].join(':'),
//       attrValues : [heads.attrName,heads.values[j]['attrValue']].join(':')
//     })
//   }
//   for(var i=1;i<=goodsSkus.length;i++){
//     if(goodsSkus[i]){
//       skuList = newSku(skuList,goodsSkus[i])
//     }
//   }
//   console.log(skuList)
// }

// function newSku(skuList,skus){
//   var list = []
//   for(var i=0;i<skuList.length;i++){
//     var skuItem = skuList[i]
//     for(var j=0;j<skus.values.length;j++){
//       var attrId = [skus.id,skus.values[j]['id']].join(':') // 属性与属性值用冒号(:)隔开
//       var attrValue = [skus.attrName,skus.values[j]['attrValue']].join(':') // 属性与属性值用冒号(:)隔开
//       var obj = {
//         attrIds: [skuItem.attrIds,attrId].join(';'),
//         attrValues : [skuItem.attrValues,attrValue].join(';')
//       }
//       list.push(obj)
//     }
//   }
//   return list
// }
// arr(goodsSkus)





// console.log(Zuhe([["S1","M2","L3"],["R9","B10"],["a1","b2","c3"]]))











