const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'views'),
    compress: false,
    port: 8080,
    publicPath: '/xuni/'
  }
}