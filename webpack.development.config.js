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
        pxtorem({ rootValue: 100, propWhiteList: [] })
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
            }
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