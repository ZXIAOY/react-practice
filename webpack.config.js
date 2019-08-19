const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',    // 开发模式development | 生产模式production
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssPlugin({})
    ]
  },
  devServer: {
    port: 8080,
    open: true,
    progress: true,
    contentBase: './dist'
  },
  entry: {
    App: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[hash:8].js'
  },
  // devtool: 'eval-source-map',   // sourceMap单独生成文件为开发使用，production环境需要关闭
  //watch: true,                   // production环境关闭
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 500,
    ignored: /node_modules/
  },
  // plugins配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {                       
        removeAttributeQuotes: true,  
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
    }),
  ],

  // module配置
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
              ["import", { libraryName: "antd-mobile", style: "css" }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // {
          //   loader: 'style-loader',
          //   options: {
          //     insertAt: 'top',
          //   }
          // },
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.jpg|jpeg|png/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 200*1024,
            outputPath: 'assets/image/'
          }
        }
      }
    ]
  }

}