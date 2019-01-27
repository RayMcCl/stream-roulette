const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const config = webpackConfig();

const compiler = webpack(config);

compiler.run();