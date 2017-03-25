var webpack = require('webpack');
var path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['src', 'node_modules'],
	},
	module: {
		loaders: [
			{
				test: /.\jsx?$/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{ 
				test: /\.png$/, 
				loader: "url-loader?limit=100000" 
			},
			{ 
				test: /\.jpg$/, 
				loader: "file-loader" 
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
				loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
				loader: 'file-loader'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
				loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
			}
		]
	},
	entry: [
		'index.jsx'
	],
	output: {
		filename:'app.js',
		path:  __dirname + '/../dist',
	}
};