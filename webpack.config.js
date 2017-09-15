const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    js: './index.js',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux'
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    host: '0.0.0.0',
    port: 4000,
    open: true,
  }
};
