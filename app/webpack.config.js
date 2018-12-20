/* --- Modules --- */
const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* --- Resources --- */
const PACKAGE = require('./package.json');
const OUTPUT = 'dist';

/* --- Globals --- */
const APP_DIR = path.resolve(__dirname, 'src/');

/* --- Plugins --- */
const HtmlWebpackPluginIndex = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body',
	chunksSortMode: "manual",
	chunks: [
		'vendor',
		'index'
	]
});

// const SourceMapPlugin = new webpack.SourceMapDevToolPlugin({
// 	filename: 'source.js.map'
// });

const plugins = [
	/* --- Utility --- */
	// new CleanWebpackPlugin(OUTPUT),
	// new BundleAnalyzerPlugin(),

	/* --- Standard --- */
	HtmlWebpackPluginIndex
];

module.exports = () => {

	// Add the SourceMapPlugin to the plugin list
	// plugins.push(SourceMapPlugin);

	// Read the permissions based on the build settings

	plugins.push(new CopyWebpackPlugin([
		{
			from: 'src/**/*.png',
      		to: 'img/[name].[ext]',
		}
	]));

	// Add the DefinePlugin which will set Build Permissions and Version information
	plugins.push(new webpack.DefinePlugin({
		'WP_VERSION': JSON.stringify(PACKAGE.version)
	}));

	// Log the Version and Permissions to the console
	console.log('Building Version:', PACKAGE.version);
	console.log(__dirname);

	return {
		mode: 'development',
		optimization: {
			minimize: false
		},
		entry: {
			index: APP_DIR + '/index.tsx',
			vendor: APP_DIR + '/lib/TwitchPlayerLib'
		},
		resolve: {
			symlinks: false,
			alias: {
				'@': path.resolve(__dirname, './src/'),
				'APP': path.resolve(__dirname, './src/'),
				'HELPERS': path.resolve(__dirname, './src/helpers/'),
				'DICTIONARY': path.resolve(__dirname, './src/dictionary/'),
				'SERVICES': path.resolve(__dirname, './src/services/'),
				'COMPONENTS': path.resolve(__dirname, './src/components/'),
				'ROUTES': path.resolve(__dirname, './src/routes/'),
				'STORE': path.resolve(__dirname, './src/store/'),
				'RESOURCES': path.resolve(__dirname, './src/resources/'),
				'REDUCERS': path.resolve(__dirname, './src/store/reducers/'),
				'STRUCT': path.resolve(__dirname, './src/struct/'),

				// Testing
				'TREDUCERS': path.resolve(__dirname, './tests/store/reducers/'),
			},
			extensions: [
				'.js',
				'.jsx',
				'.ts',
				'.tsx',
				'.scss'
			]
		},
		output: {
			path: path.resolve(path.join(__dirname, OUTPUT)),
			filename: '[name].js',
			publicPath: '/',
		},
		plugins: plugins,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /(node_modules|bower_components)/,
					use: 'ts-loader'
				},
				{
					test: /\.(js| )$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.css$/,
					loader: [ 'style-loader', 'css-loader' ]
				},
				{
					test: /\.scss$/,
					use: [{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					}, {
						loader: 'sass-loader'
					}]
				},
				{
					test: /\.(png|jpg|gif|ico|eot|ttf|woff|woff2|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {}
						}
					]
				}
			]
		}
	};
};