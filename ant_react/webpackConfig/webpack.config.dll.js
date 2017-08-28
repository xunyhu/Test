
var webpack = require('webpack');
var path    = require('path')
var vendors = require('./vendors')
var plugins = require('./plugins')

module.exports = {
  output: {
    path: path.join(__dirname,'../src/js'),
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
    vendors : vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname,'../[name]-manifest.json'),
      name: '[name]',
      // context: __dirname,
    }),
    plugins.getHtml('../src/dll-index.html','../src/template/template.html')
  ],
};