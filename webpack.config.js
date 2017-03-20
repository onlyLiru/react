const path =require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('css/[name].css');

const config = {
	entry: {
		index:path.resolve(__dirname, 'src/main.js'),
		vendors: ['react']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				loader:'babel-loader',
				exclude: [
					path.resolve(__dirname,node_modules_dir)
				]
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader!postcss-loader'
			},
			{
				test:/\.less$/i,
				use: extractLESS.extract([ 'css-loader', 'postcss-loader', 'less-loader' ])
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!postcss-loader!sass-loader'
			},
			{
				test: /\.(png|jpg|gif|woff|woff2)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.(mp4|ogg|svg)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
	    new webpack.optimize.CommonsChunkPlugin({ 
	    	name: 'vendors', 
	    	filename: 'vendor.bundle.js' 
	    }),
		require('autoprefixer'),
		extractLESS
	]
}

module.exports = config;