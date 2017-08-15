const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: './js/test.js',
  output:{ 
    path: path.join(__dirname,'./dist'),
    filename : '[name].js'
  } 
}