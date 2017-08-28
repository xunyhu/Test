
var path = require('path')
var webpack = require('webpack')
/*
html-webpack-plugin插件，重中之重，webpack中生成HTML的插件，
具体可以去这里查看https://www.npmjs.com/package/html-webpack-plugin
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
/*
extract-text-webpack-plugin插件，
有了它就可以将你的样式提取到单独的css文件里，
妈妈再也不用担心样式会被打包到js文件里了。
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 返回生成html代码的插件
function getHtml(file,temp,config){
  config = config ? config : {}
  var conf = {              // 利用该插件实现vendor被插入到html中
    filename: path.join(__dirname,file),
    template : path.join(__dirname,temp),
    inject: 'body',
    hash: true,
    minify: {
      removeComments: true,
      collapseWhitespace: false
    }
  }
  conf = Object.assign(conf,config)
  return new HtmlWebpackPlugin(conf)
}

// 返回css代码插件

function buildCss(name){
  return new ExtractTextPlugin({ filename: name, disable: false, allChunks: true })
  // return new ExtractTextPlugin(name, {
  //   allChunks: true
  // })
}

//js压缩
function UglifyJsPlugin(){
  return new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  // return new webpack.optimize.UglifyJsPlugin({
  //     minimize: true,
  //     sourceMap: false,
  //     mangle: false
  //   })
}

var plugins = {
  getHtml:getHtml,
  buildCss:buildCss,
  UglifyJsPlugin:UglifyJsPlugin
}

module.exports = plugins