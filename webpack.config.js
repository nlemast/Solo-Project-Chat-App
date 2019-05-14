const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  devServer: {
    publicPath: '/build',
    port: 4000
  }
};
