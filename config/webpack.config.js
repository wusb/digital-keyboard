const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/main.js'],
    Keyboard: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    publicPath: "/build/",
    libraryTarget: 'umd',
    library: 'DigitalKeyboard'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|build)/,
        query: {
          presets: ['env']
        }
      }, {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:3]'
          },
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    port: process.env.PORT || 8101
  }
};
