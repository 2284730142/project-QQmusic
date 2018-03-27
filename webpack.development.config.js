const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const postcssOpts = {
    ident: 'postcss',
    plugins: () => [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        }),
        pxtorem({rootValue: 100, propWhiteList: []})
    ],
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {loader: 'postcss-loader', options: postcssOpts}
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader', options: postcssOpts },
                    'less-loader'
                ]
            },
            /*{
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css!postcss'
            },*/
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                loader: 'url-loader?limit=2048'
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=2048'
            },
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.json']
    },
    // plugins: [
    //     new webpack.NoEmitOnErrorsPlugin(),
    //     new HtmlwebpackPlugin({
    //         filename:"index.html",
    //         template: path.resolve('./src/index.html'),
    //         hash:true
    //     })
    // ],
    // devServer: {
    //     contentBase: path.resolve('./src'),
    //     historyApiFallback: true,
    //     inline: true,
    //     port: 8181
    // }
};