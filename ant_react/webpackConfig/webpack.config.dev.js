

var webpack = require('webpack');
var path = require('path')
var plugins = require('./plugins')
var modules = require('./module')
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  devtool : 'inline-source-map',
  context : path.resolve(__dirname,'../client'),
  entry: {
    'app'  : './app.js',
  },
  output:{ 
    path:path.join(__dirname,'../src/js'),
    publicPath:'js/',
    chunkFilename: "chunks/chunks_[name].js",
    filename : '[name].js'
  },
  module:modules,
  plugins: [
    plugins.buildCss('app.css'),
    plugins.getHtml('../src/index.html','../src/dll-index.html',{
      chunks: ['app']
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new CleanWebpackPlugin([
      'src/js/chunks'
    ],{
      root: process.cwd()
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname,'..'),
      manifest: require( path.join(__dirname,'../vendors-manifest.json')),
    })
  ] 
}







