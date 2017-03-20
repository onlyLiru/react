/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const open = require('open');
// const ip='192.168.1.10';
const ip='localhost';
const port =8081;

new WebpackDevServer( 
	webpack(config), {
	  contentBase: './',
	  historyApiFallback: true,
	  hot: true,
	  port: port,
	  noInfo: false
	})
	.listen(port, ip, (err) => {
	  if (err) {
	    console.log(err);
	  }
	  console.log('Listening at '+ ip +':' + port);
	  console.log('Opening your system browser...');
	  open('http://'+ ip +':' + port);
	}
);
