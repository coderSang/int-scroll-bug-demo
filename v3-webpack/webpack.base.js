/* eslint-disable no-undef */
// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path')
const { resolve: _resolve } = path
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const AutoImport = require('unplugin-auto-import/webpack')
const PROJECT_NAME = 'micro-children1';
module.exports = {
  entry: './src/main.ts',
  output: {
    path: _resolve(__dirname, `${PROJECT_NAME}`),
    publicPath: `/${PROJECT_NAME}/`,
    filename: 'js/[contenthash].bundle.js',
    clean: true,
    compareBeforeEmit: false,
    assetModuleFilename: 'images/[hash][ext][query]',
    sourcePrefix: ''
  },
  plugins: [
    AutoImport({
      eslintrc: {
        enabled: true
      },
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      PROJECT_NAME: JSON.stringify(PROJECT_NAME)
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.css$/i,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  resolve: {
    alias: {
      '@': _resolve(__dirname, 'src/')
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue', '...']
  }
}
