var webpack = require('webpack');
var path = require('path');
var vendors = require('./vendors');
var plugins = require('./plugins');
var modules = require('./module');

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, '../client'),
    entry: {
        'app': './app.js'
    },
    output: {
        path: path.join(__dirname, '../src/js'),
        publicPath: 'js/',
        filename: '[name].js'
    },
    module: modules,
    // devServer : {
	// 	contentBase : './src',
	// 	inline : true
	// },
    plugins: [
        plugins.buildCss('app.css'),
        plugins.getHtml('../src/index.html','../src/dll-index.html',{
            chunks: ['app']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        // new webpack.DllReferencePlugin({
        //     context: path.join(__dirname, '..'),
        //     mainfest: require(path.join(__dirname, '../vendors-manifest.json'))
        // })
    ]
}