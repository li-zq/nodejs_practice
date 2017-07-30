const webpack = require('webpack');
const path    = require('path');
const config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  chunkFilename:'[name].min.js',
  sourceMapFilename: '[name].bundle.map',
  publicPath: '',
  path: path.join(__dirname+'/dist')
};
config.entry.app = __dirname+'/client/public/myjs/test.js'
config.plugins = config.plugins.concat([
  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
		comments:false,//显示注释
		mangle:true,//取消代码混淆
		compress:{
			warnings:false//在UglifyJs删除没有用到的代码时不输出警告
		}
  }),
  /*new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('sit'),
      'DEBUG': false
    }
  })*/
]);

module.exports = config;
