
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var args = {
	entryPath: 'src/style/index.scss',
	outputPath: 'lib/style'
};

module.exports = {
	entry: [
		path.resolve(__dirname, args.entryPath)
	],
	output: {
		path: path.resolve(__dirname, args.outputPath),
		filename: 'index.css'
	},
	resolve: {
		root: path.resolve(__dirname)
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('index.css')
	]
};
