const webpack = require('webpack')
module.exports = {
  entry: './lib/index.js',
  output: {
    filename: './springer.js',
    libraryTarget: 'umd',
    library: 'Springer'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
