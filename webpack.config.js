const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const context = path.resolve(__dirname)
const BUILD = path.join(context, 'public')
const ENTRY = path.join(context, 'src')

const HTML_TEMPLATE = path.join(BUILD, 'index.template.html')
const ENTRY_FILE = path.join(ENTRY, 'entry.jsx')

module.exports = {
  context,
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    ENTRY_FILE
  ],
  output: {
    filename: 'assets/[name].[hash].js',
    publicPath: '/',
    path: BUILD
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('precss'),
                require('autoprefixer')
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      'shared'
    ],
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.css'
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: BUILD,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlPlugin({
      template: HTML_TEMPLATE
    })
  ]
}