const webpack = require('webpack');
const path    = require('path');
const config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  chunkFilename:'[name].min.js',
  publicPath: '',
  path: path.resolve(__dirname, 'client')
};
config.entry.app = [
  'webpack-dev-server/client?http://localhost:3011/',//
  'webpack/hot/dev-server',//webpack-dev-server 实现hot加载
  __dirname+'/client/public/myjs/test.js'
];

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('dev'),
      'DEBUG': true
    }
  })
]);

module.exports = config;
