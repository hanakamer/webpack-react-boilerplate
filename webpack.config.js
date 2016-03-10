const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  style: path.join(__dirname, 'style'),

};

const common = {
  entry: {
    src: PATHS.src,
  },
  resolve: {
    extensions: ['', '.js', 'jsx'],
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.src,
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.style,
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.src,
      },
    ],
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      devtool: 'eval-source-map',
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      psot: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true,
      }),
    ],
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
