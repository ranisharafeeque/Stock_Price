const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: path.join(__dirname, './client/index.html') }),
  ],
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /s?css$/,
        exclude: /node_modules/,

        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],

        
      },
    ],
  },
  devServer: {
    // contentBase: path.join(__dirname, './'),
    compress: true,
    port: 8080,
    // publicPath: '/build',
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
};
