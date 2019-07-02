const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './frontend/snoozer.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/], 
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  devtool: 'inline-source-map'
};
