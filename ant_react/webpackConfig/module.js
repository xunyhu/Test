// /*
// extract-text-webpack-plugin插件，
// 有了它就可以将你的样式提取到单独的css文件里，
// 妈妈再也不用担心样式会被打包到js文件里了。
//  */
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var modules = {
//   loaders:[
//     {
//       test:/\.js$/,
//       exclude:/node_modules/,
//       loader:'babel-loader',
//       query:{
//         compact: false,
//         presets:['es2015',"stage-0",'react'],
//         plugins:["transform-decorators-legacy"]
//       }
//     },{
//       test: /\.css$/,
//       loader: ExtractTextPlugin.extract("style-loader", "css-loader")
//     }
//   ]
// }
// module.exports = modules


/*
extract-text-webpack-plugin插件，
有了它就可以将你的样式提取到单独的css文件里，
妈妈再也不用担心样式会被打包到js文件里了。
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var modules = {
  loaders:[
    {
      test:/\.js$/,
      exclude:/node_modules/,
      loader:'babel-loader',
      query:{
        compact: false,
        presets:['es2015',"stage-0",'react'],
        plugins:[["import", {
          "libraryName": "antd",
          "style": 'css',   // or 'css' 
        }]]
      }
    },
    {
      test:/\.css$/,
      loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
    }
  ]
}
module.exports = modules