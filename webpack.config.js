'use strict';

let webpack = require('webpack');

module.exports = {
  entry: "./src/index",
  output: {
      path: __dirname + "/dist",
      filename: "index.js"
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
