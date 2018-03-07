import webpack from 'webpack';
import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';



export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/js/app')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    watch: true,
    plugins: [
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3000,
                files: [
                    'src/**/*',

                ],
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: 'http://localhost:3001/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            }
        ),
        /**
         * ? html-webpack-plugin
         * * Copy Html to the dist folder
         * ! Because of this we do not to mention any any script tag in the html.
         */
        new htmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),

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