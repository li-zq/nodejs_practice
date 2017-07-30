const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'source-map',
	//入口文件，即从入口文件入手，入口文件中包含各种依赖
	entry: {
		vendor: 'jquery'
	},
	/*output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].min.js',
		path: path.join(__dirname,'dist'),
		publicPath: '',
		pathinfo: true, // boolean
    // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。

    jsonpFunction: "myWebpackJsonp", // string
    // 用于加载分块的 JSONP 函数名

    sourceMapFilename: "[name].map", // string
    // 「source map 位置」的文件名模板

    devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
    // 「devtool 中模块」的文件名模板

    devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
    // 「devtool 中模块」的文件名模板（用于冲突）

    umdNamedDefine: true, // boolean
    // 在 UMD 库中使用命名的 AMD 模块

    //crossOriginLoading: "use-credentials", // 枚举
    //crossOriginLoading: "anonymous",
    crossOriginLoading: false,
    // 指定运行时如何发出跨域请求问题
	},*/
	module: {
		//规定用什么loader去加载对应的文件
		rules: [
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                    	sourceMap: true
                    }
                }, {
                    loader: "less-loader",
                    options: {
                    	sourceMap: true
                    }
                }],
                // use style-loader in development 
                fallback: "style-loader"
							})
			},
			{
				test: /\.css$/,
				use: 'css-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.hbs$/,
				use: 'hbs-loader'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader'
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			}
		]
	},
	plugins: [
		/*new webpack.optimize.UglifyJsPlugin({
			comments:true,//显示注释
			mangle:false,//取消代码混淆
			compress:{
				warnings:true//在UglifyJs删除没有用到的代码时不输出警告
			} 
		}),*/
		//生成index.html在publicPath路径下，webpack-dev-server中的contentBase无效
		new HtmlWebpackPlugin({
      template: __dirname+'/client/layout.html',
      inject: 'body',
      hash: true
    }),
    //全局挂载插件,即全局变量
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    //共同，name与entry中对应
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new ExtractTextPlugin({
    	filename: "[name].[contenthash].css",
    	disable: false,
    	//allChunks: true
  	})
	]
}
