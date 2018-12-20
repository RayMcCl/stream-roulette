const colors = require('colors');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');

const config = webpackConfig();

const serverConfig = {
	publicPath: '/',
	historyApiFallback: true,
	port: 9000
};

serverConfig.stats = 'errors-only';

// Execute the Webpack Build Process
const server = new WebpackDevServer(webpack(config), serverConfig);

// Host the server at the associated port
server.listen(serverConfig.port, 'localhost', function (err) {
	if (err) {
		console.log(err);
	}
	console.log('WebpackDevServer listening at localhost:', colors.green('http://localhost:' + serverConfig.port));
});