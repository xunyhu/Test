var webpack = require('webpack');
var path = require('path');
var vendors = require('./vendors');
var plugins = require('./plugins');
var modules = require('./module');

module.exports = {
    entry: {
        vendors: vendors.vendors
    },
    output: {
        path: path.join(__dirname, '../src/js'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../[name]-mainfest.json'),
            name: '[name]'
        }),
        plugins.getHtml('../src/dll-index.html','../src/template/template.html')
    ]
};