
const path = require('path');

const PORT = process.env.PORT || 3000;

const isVerbose = process.argv.includes('--verbose');
const isDebug = process.argv.includes('--debug');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:' + PORT,
		'webpack/hot/only-dev-server',
		path.join(__dirname, './demo/src')
	],
	output: {
		path: path.join(__dirname, './demo/public'),
		filename: 'bundle.js'
	},
	devServer: {
		port: PORT,
		contentBase: path.join(__dirname, './demo/public'),
		stats: {
			colors: true,
			reasons: isDebug,
			hash: isVerbose,
			version: isVerbose,
			timings: true,
			chunks: isVerbose,
			chunkModules: isVerbose,
			cached: isVerbose,
			cachedAssets: isVerbose
		}
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	debug: isDebug,
	devtool: isDebug ? 'source-map' : false,
	module: {
		loaders: [{
			test: /\.s[ac]ss$/,
			loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
		},
		{
			test: /\.jsx?$/,
			loader: 'react-hot!babel?cacheDirectory=true',
			exclude: /node_modules/
		},
		{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff'
		},
		{
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff2'
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/octet-stream'
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file'
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=image/svg+xml'
		}]
	}
};
