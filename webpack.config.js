// NodeJS code HERE!
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bandle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({template: './page.html'})],
    
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        port: 3000 // localhost:3000
    },
};