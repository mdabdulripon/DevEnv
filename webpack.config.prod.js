import webpack from 'webpack';
import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

export default {
    devtool: 'source-map',
    entry: {
        // [path.resolve(__dirname, 'src/js/app')],
        vendor: path.resolve(__dirname, 'src/js/vendor'),
        main: path.resolve(__dirname, 'src/js/app')

    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [

        /**
         * ? What WebpackMd5Hash does
         * * Hash the file name
         * ! Every time name changes when file content is changes
         **/
        new WebpackMd5Hash(),
        /**
         * ? what CommonsChunkPlugin does!
         * * To Create separate bundle file
         * ! vendor libraries are cached separately.
         **/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        /**
         * ? html-webpack-plugin
         * * Copy Html to the dist folder
         * ! Because of this we do not to mention any any script tag in the html.
         */
        new htmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
        /**
         * * Minify Js
         */
        new webpack.optimize.UglifyJsPlugin(),


        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false,
        }),
        /**
         * ? What ProvidePlugin does
         * * It makes sure that the required js library is available in the application.
         * ! Mostly, it is important for the Bootstrap framework
         */
        new webpack.ProvidePlugin({ // inject ES5 modules as global vars
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether',
            'Popper': 'popper.js'
        })

    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader'] },
            { test: /\.(png|jpg|ttf|eot)$/, exclude: /node_module/, loaders: 'url-loader?limit=100000' }
        ]
    }
}