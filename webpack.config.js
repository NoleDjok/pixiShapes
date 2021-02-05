const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    devServer: {
      open: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/},
            {test: /\.(css|less)$/, use: ['style-loader', 'css-loader','less-loader'],
            },
        ],
    },
    devtool: 'eval-cheap-source-map'
};
