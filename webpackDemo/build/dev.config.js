const webpackMerge = require("webpack-merge");
const baseConfig = require('./base.config');
module.exports = webpackMerge.merge(baseConfig, {
  devServer: {
    //为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
    contentBase: './dist',
    //页面实时刷新
    inline: true,
    //端口号
    port: 8002
  }
})