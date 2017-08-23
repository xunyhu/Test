
var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//生成html代码插件
function getHtml(file, temp, config) {
    config = config ? config : {} ;
    var conf = {
        filename: path.join(__dirname, file),
        template: path.join(__dirname, temp),
        inject: 'body',
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    }
    conf = Object.assign(conf, config);//合并对象
    return new HtmlWebpackPlugin(conf);
}

//生成css代码插件
function buildCss (name) {
    return new ExtractTextPlugin({
        filename: name,
        disable: false,
        allChunks: true
    })
}

//js代码压缩
function UglifyJsPlugin () {
    return new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: false
        }
    })
}


var plugins = {
    getHtml: getHtml,
    buildCss: buildCss,
    UglifyJsPlugin: UglifyJsPlugin
}
module.exports = plugins;