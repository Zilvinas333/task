const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images',
          publicPath: '../images'
        },
      },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ /* kazkas irgi su failu uzloadinimu susije? */
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.hbs' /* taip kuriuosi naujus failus */
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/styles/app.css',
    }),
  ]
};