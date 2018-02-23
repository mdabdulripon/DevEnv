import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, 'src/app')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        /**
         * * Eliminate duplicate packages when generating bundle.js
         */
        new webpack.optimize.DedupePlugin(),

        /**
         * * Minify Js
         */
        new webpack.optimize.UglifyJsPlugin()

    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
        ]
    }
}