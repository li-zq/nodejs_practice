"use strict";
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('default', ()=>{
	const webpackDevConfig = require('./webpack.dev.config.js');
	const complier = webpack(webpackDevConfig);
	const server = new WebpackDevServer(complier, {
		stats: {
			colors: true
		},
		contentBase: __dirname+'/client',
		inline: true,
		historyApiFallback: true,
		//hot: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3010',
				host: 'http://localhost',
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/api': '/api'
				}
			}
		}
		/*proxy: {
			'/api': 'http://localhost:3010/api'
		}*/
	});
	server.listen(3011, 'localhost', () => {
		console.log('Server Start At Port 3011');
	})
});

gulp.task('webpack', (cb)=>{
	const webpackDistConfig = require('./webpack.dist.config.js');
	webpack(webpackDistConfig, (err, stats) => {
		if(err) console.log(err);
		gutil.log('[webpack]', stats.toString());
	})
	cb();
});