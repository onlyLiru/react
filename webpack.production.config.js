var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('./../css/[name].css');

var config = {
  	entry: {
		index:path.resolve(__dirname, 'src/main.js'),
		vendors: ['react','antd']
	},
	output: {
		path: path.resolve(__dirname, 'dist/js/'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				loader:'babel-loader',
				exclude: [
					path.resolve(__dirname,'node_modules')
				]
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader!postcss-loader'
			},
			{
				test:/\.less$/,
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
	    	filename: 'vendor.bundle.js',
	    	minChunks: 3
	    }),
		require('autoprefixer'),
		extractLESS,
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
		      'process.env': {
		          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		      },
	    }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	resolve: {
      extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    }
};

module.exports = config;