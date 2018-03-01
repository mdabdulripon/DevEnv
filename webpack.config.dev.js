import webpack from 'webpack';
import path from 'path';


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
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false,
        }),
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