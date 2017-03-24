var webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['src', 'node_modules'],
	},
	module: {
		loaders: [
			{
				test: /.\jsx?$/,
				loaders: ['babel-loader']
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