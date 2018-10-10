var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/components/App/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/components/App/index.html'
    })
  ]
}