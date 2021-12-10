const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
})


module.exports = {
  mode: 'development',
  entry: './src/css.js',
  output: {
    filename: './main.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    extractLess,
    new CleanWebpackPlugin()
  ],
}