# webpack

- 可以解析

## 命令

- npx webpack -v 查看 webpack 版本
- npx webpack xxx.js 打包某文件

## 配置

- mode 配置打包模式
  - development 开发环境
- entry 入口文件
- output 打包输出地址
  - filename 打包后文件名
  - path 必须为绝对路径
- module 处理非 js 的其他文件
  - rules 配置规则
    - test 匹配文件
    - use 使用插件
      - loader 插件名
        - loader 从右向左，从下往上的顺序使用
      - options 对 loader 的配置
        - limit 限制大小
        - name 打包文件的 name

// webpack.config.js

```js
module.exports = {
  mode: "development",
  entry: './src/index.js'
  output: {
    filename: 'js/index.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg)$/, // 匹配gif
        use: [
          // 第三方处理插件
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小雨8k
              name: '[name][hash:8].[ext]' // 文件名+8位hash值
            }
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        // loader从右向左的顺序使用
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
```

- loader
  - MiniCssExtractPlugin.loader 生成 css 文件，与 style-loader 冲突
  - style-loader 生成 style 文件，插入 css
  - css-loader 处理 css 文件
  - postcss-loader 处理 css3 兼容前缀
    - autoprefixer 自动添加 css3 兼容前缀插件

// postcss.config.js

```js
module.exports = {
  plugins: [require("autoprefixer")],
};
```

- 插件
  - mini-css-extract-plugin 打包 css 为一个文件
    - new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      }) 配置插件
    - MiniCssExtractPlugin.loader 使用 loader
  - optimize-css-assets-webpack-plugin 优化打包后的 css 代码
  - html-webpack-plugin

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  rules: [
    {
      test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
        ],
    }
  ],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 打包后的名字(路径)
      templace: 'templace/index.html', // 打包生成的模版文件(路径)
      inject: false, // 是否注入打包后js,css文件到index.html中
      minify: {
        collapseWhitespace: true // 是否压缩打包后的index.html
         removeComments: true, // 是否去除注释
  removeScriptTypeAttributes: true, // 去除多余script属性
  removeStyleLinkTypeAttributes: true, // 去除多余style属性
      }
    })
  ]
}
```

### 多文件

```js
module.exports = {
  mode: "development",
  entry: {
    one: './src/one.js',
    two: './src/two.js',
  },
  output: {
    filename: 'js/[name].js', // 使用占位符，多文件打包到不同的文件出楼
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // 同理
    }),
    // 生成多个html文件
    new HtmlWebpackPlugin({
      filename: 'one.html',
      chunks: ['one'] // 注入指定js,css文件
    }),
    new HtmlWebpackPlugin({
      filename: 'two.html',
      chunks: ['two']
    })
  ]
```
