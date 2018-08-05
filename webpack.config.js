const path = require('path');
const webpack = require('webpack');

function createConfig(target) {
  var name = 'index.js';

  if(target !== 'commonjs2') {
    name = 'scope-of-works.js'
  }

  var output = {
    library: 'ScopeOfWorks',
    libraryTarget: target,
    path: path.resolve(__dirname, 'dist'),
    filename: name
  }

  if(typeof target === 'undefined') {
    name = 'scope-of-works.js';
    output = {
      path: path.resolve(__dirname, 'dist'),
      filename: name
    }
  }

  return {
    name: target,
    entry: './src',
    output: output,
    module: {
      rules: [
        {
          test: /\.css$/,
          loader:'style-loader!css-loader'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
  }
}

module.exports = [
  createConfig('commonjs2')
]