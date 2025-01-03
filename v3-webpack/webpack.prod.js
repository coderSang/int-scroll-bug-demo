/* eslint-disable no-undef */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const baseConfig = require('./webpack.base.js')
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
