const path =require('path');
const existsSync = require('fs').existsSync;
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var pathToReact = path.resolve(node_modules_dir, 'react/dist/react.min.js');
const extractLESS = new ExtractTextPlugin('css/[name].css');

// const pkg = require('./package.json') || {};
// let theme = {};
//   if (pkg.theme && typeof(pkg.theme) === 'string') {
//     let cfgPath = pkg.theme;
//     // relative path
//     if (cfgPath.charAt(0) === '.') {
//       cfgPath = resolve(args.cwd, cfgPath);
//     }
//     const getThemeConfig = require(cfgPath);
//     theme = getThemeConfig();
//   } else if (pkg.theme && typeof(pkg.theme) === 'object') {
//     theme = pkg.theme;
// }
// console.log(theme);

const config = {
	entry: {
		index:path.resolve(__dirname, './src/main.js'),
		vendors: ['react']
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: path.resolve(__dirname, '/dist/'),
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
			},
			// {
	  //         test: /\.module\.less$/,
	  //         loader: ExtractTextPlugin.extract(
	  //           'css-loader?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!' +
	  //           'postcss-loader!' +
	  //           `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
	  //         ),
	  //       }
		],
		noParse: [
			/$react.min\.js/,
			/react-dom.min\.js$/,
			/react-router.min\.js$/,
			/antd.min\.js$/,
			/antd-mobile.min\.js$/,
		]
	},
	plugins: [
	    new webpack.optimize.CommonsChunkPlugin({ 
	    	name: 'vendors', 
	    	filename: 'vendor.bundle.js' 
	    }),
		require('autoprefixer'),
		extractLESS
	],
	resolve: {
      extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    }
}

module.exports = config;