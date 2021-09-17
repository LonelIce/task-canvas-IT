const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/app.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "[path][name][ext]",
        clean: true,

    },
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',
        port: 5001,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/,},
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HTMLWebpackPlugin({
                filename: "index.html",
                template: path.resolve(__dirname, 'src/temp.html')
            }
        )
    ]
}