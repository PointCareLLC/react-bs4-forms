
var path = require('path')

var args = {
    port: 3000,
    entryPath: 'example/src/index',
    outputPath: 'example/public'
}

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:' + args.port,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, args.entryPath)
    ],
    output: {
        path: path.resolve(__dirname, args.outputPath),
        filename: "bundle.js"
    },
    devServer: {
        port: args.port,
        contentBase: args.outputPath,
        stats: { colors: true }
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            'ez-js-library': 'src'
        },
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map',
    debug: true,
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.jsx?$/,
                loader: 'react-hot',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                }
            }
        ]
    }
}
