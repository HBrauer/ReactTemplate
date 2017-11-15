const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
