var path = require('path');
var webpack = require('webpack');
var merge = require('lodash/object/merge');

var commonConfig = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    alias: {
      'history': 'react-router/node_modules/history',
      'lodash': 'lodash',
      'moment': 'moment/min/moment.min.js'
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      }, {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
      }, {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      }, {
        test: /[\.jsx|\.js ]$/,
        exclude: /node_modules/,
        loader: "babel-loader?stage=0&optional[]=runtime"
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.woff$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff&name=/js/[hash].[ext]"
      }, {
        test: /\.woff2$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff2&name=/js/[hash].[ext]"
      }, {
        test: /\.ttf$/,
        loader: "file-loader?name=/js/[hash].[ext]"
      }, {
        test: /\.eot$/,
        loader: "file-loader?name=/js/[hash].[ext]"
      }, {
        test: /\.svg$/,
        loader: "file-loader?name=/js/[hash].[ext]"
      }
    ]
  }
};

var clientConfig = merge({}, commonConfig, {
  entry: {
    'app': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  plugins: [...commonConfig.plugins],
  externals: {
    'jquery': 'window.$',
    'dom7': 'window.Dom7',
    'pace': 'window.Pace'
  },
  module: {
    loaders: [...commonConfig.module.loaders]
  }
});

module.exports = clientConfig;
