
var webpack = require('webpack');
var path = require('path')
var vendors = require('./vendors')
var plugins = require('./plugins')
var modules = require('./module')
/*
复制文件插件
*/
var CopyWebpackPlugin = require('copy-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  devtool: 'inline-source-map',
  context : path.resolve(__dirname,'../client'),
  entry:{
    app:'./app.js',
    vendors : vendors
  },
  // entry: {
  //   'app'  : path.join(__dirname,'../client/app.js'),
  //   'vendors': vendors
  // },
  output:{ 
    path:path.join(__dirname,'../src/dist/js'),
    publicPath:'js/',
    chunkFilename: "chunks/chunks_[name].js",
    filename : '[name].js'
  },
  module:modules,
  plugins: [
    plugins.buildCss('app.css'),
    plugins.getHtml('../src/dist/index.html','../src/dll-index.html',{
      chunks: ['app']
    }),
    plugins.UglifyJsPlugin(),

    /*
    OccurenceOrderPlugin 是为组件和模块分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID，通过分析ID，可以建议降低总文件的大小。
    */
    new webpack.optimize.CommonsChunkPlugin({ 
      name: 'vendors', 
      filename: 'vendors.js',
      // minChunks:2,
      // minSize:1024,
    }),
    // webpack2.0后不支持
    // new webpack.optimize.OccurenceOrderPlugin(),
    new CleanWebpackPlugin([
      'src/dist/assets',
      'src/dist/js/app.js',
      'src/dist/js/vendors.js',
      'src/dist/js/chunks',
    ],{
      root: process.cwd()
    }),
    new CopyWebpackPlugin([
      {
        from : path.join(__dirname,'../src/assets'),
        to : path.join(__dirname,'../src/dist/assets')
      },
      {
        from : path.join(__dirname,'../src/404.html'),
        to : path.join(__dirname,'../src/dist/404.html')
      },
      {
        from : path.join(__dirname,'../src/lib'),
        to : path.join(__dirname,'../src/dist/lib')
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
  ] 
}







