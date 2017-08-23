
/**
 * 分开打包js文件和css文件
 */

 var ExtractTextPlugin = require('extract-text-webpack-plugin');

 var modules = {
     loaders: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
             compact: false,
             presets: ['es2015','stage-0','react'],
             plugins: [['import',{
                 'libraryName': 'antd',
                 'style': 'css'
             }]]
         }
     },{
         test: /\.css$/,
         loader: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use: 'css-loader'
         })
     }]
 }
 module.exports = modules;