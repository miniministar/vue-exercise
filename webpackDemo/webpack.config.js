//依赖node中的path
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    //path 为绝对路径
    path:  path.resolve( __dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到dom中
        // 使用多个loader时，是从右向左的
        use: ["style-loader" ,"css-loader" ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:8192,//限制打包图片的大小：
              //如果大于或等于8192Byte，则按照相应的文件名和路径打包图片；如果小于8192Byte，则将图片转成base64格式的字符串。
              name:'img/[name].[hash:8].[ext]',//img:图片打包的文件夹；
              //[name].[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
              //[hash:8]：一个项目中如果两个文件夹中的图片重名，打包图片就会被覆盖，加上hash值的前八位作为图片名，可以避免重名。
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //babel 将es6转化为es5
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    //添加引用时省略扩展名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归冉庆所有'),
    new HtmlWebpackPlugin({template: 'index.html'}),
    new uglifyJsPlugin()
  ],
  devServer: {
    //为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
    contentBase: './dist',
    //页面实时刷新
    inline: true,
    //端口号
    port: 8002
  }
}