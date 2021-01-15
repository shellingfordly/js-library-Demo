const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './js/main.js',
    path: path.join(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
    }),
    new CleanWebpackPlugin()
  ],
}