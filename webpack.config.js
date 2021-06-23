const path = require('path')
// 引入分离 css 文件的 模块
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'development', //  打包模式 production 压缩  /    development 不压缩
  devtool: "source-map",
  entry: path.resolve(__dirname, './src/main.js'), // 打包入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包出口
    filename: 'js/[name].js' // 打包完的静态资源文件名
  },
  module: {
    rules: [{
      // 正则表达式，用于匹配所有的css文件
      test: /\.css$/,
      use: [
        // 分离 css 文件
        MiniCssExtractPlugin.loader,
        // 识别 css 文件的内容
        "css-loader",
        // 动态创建 style 标签
        "style-loader"
      ]
    }]
  },
  // 插件配置
  plugins: [
    // 定义打包好的文件的存放路径和文件名
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ]
}