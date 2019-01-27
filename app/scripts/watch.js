const colors = require('colors');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

const config = webpackConfig();

const compiler = webpack(config);

console.log('Watching Changes...');

const serverConfig = {
	publicPath: '/',
	historyApiFallback: true,
	port: 9000,
	watchOptions: {
		poll: true
	}
};

serverConfig.stats = 'errors-only';

// Execute the Webpack Build Process
const server = new WebpackDevServer(compiler, serverConfig);

// Host the server at the associated port
server.listen(serverConfig.port, 'localhost', function (err) {
	if (err) {
		console.log(err);
	}
	console.log('WebpackDevServer listening at localhost:', colors.green('http://localhost:' + serverConfig.port));
});