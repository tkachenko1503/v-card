'use strict';

let webpack = require('webpack');
let path = require('path');
let node_modules = path.resolve(__dirname, 'node_modules');
let pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, "src/index")
  ],
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js"
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: "style!css" }
    ],
    noParse: [pathToReact]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
