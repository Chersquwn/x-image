const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.ts',

  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, '../example')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    },
    symlinks: false
  },

  context: path.resolve(__dirname, '../example'),

  stats: 'errors-only',

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, '../example'), 
  }
}
