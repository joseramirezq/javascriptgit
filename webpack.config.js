const HtmlWebpackPlugin= require('html-webpack-plugin');
const path= require('path');
module.exports={
    entry:'./source/app/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        port:3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./source/index.html'
        })
    ]

}