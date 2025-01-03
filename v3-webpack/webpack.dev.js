/* eslint-disable no-undef */
// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const portfinder = require('portfinder')
const baseConfig = require('./webpack.base.js')

const devWebpackConfig = merge(baseConfig, {
  optimization: {
    minimize: false
  },

  mode: 'development',
  devtool: 'inline-source-map',
  cache: {
    type: 'filesystem'
  },
  watchOptions: {
    ignored: /node_modules/
  },
  externals: {},
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    client: {
      logging: 'none',
      overlay: false,
      progress: true
    }
  }
})
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = devWebpackConfig.devServer.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port
      resolve(devWebpackConfig)
    }
  })
})
