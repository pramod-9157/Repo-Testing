const { name } = require('./package.json')
const path = require('path')

module.exports = {
    target: 'node',
    entry: './index.js',
    output: {
      filename: `${name}`,
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2'
    },
    optimization: {
      // We do not want to minimize our code for debugging purposes.
      minimize: false
    },
    externals: {
      // bypass loading of module loader in subsequent calls in nested modules
      'module-loader': './index'
    }
  };