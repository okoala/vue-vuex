import webpack from 'webpack'
import vue from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import SwigWebpackPlugin from 'swig-webpack-plugin'
import ExtractTextPlugin from "extract-text-webpack-plugin"
import path from 'path'

import config from '../../config'

const paths  = config.get('utils_paths')
const globals = config.get('globals')

const webpackConfig = {
  name: 'client',
  target: 'web',
  entry: {
    app: [
      paths.src('./index.js')
    ],
    vendor: config.get('vendor_dependencies')
  },
  output: {
    filename: '[name].js',
    path: paths.dist('public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.DefinePlugin(config.get('globals'), {
      __CLIENT__ : true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template : paths.src('index.html'),
      hash     : true,
      filename : 'index.html',
      minify   : globals.__PROD__ ? {} : false,
      inject   : 'body'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // vue-resource 在进行babel编译的时候会出错，所以要先屏蔽.
        exclude: /resource/i,
        loader: 'babel?optional[]=runtime&stage=2'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
        )
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!' + 'autoprefixer-loader'
        )
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.woff(\?.*)?$/,     loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?.*)?$/,    loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf(\?.*)?$/,      loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?.*)?$/,      loader: "file-loader?prefix=fonts/&name=[path][name].[ext]" },
      { test: /\.svg(\?.*)?$/,      loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" }
    ]
  },
  vue: {
    loaders: {
      // apply babel transform to all javascript
      // inside *.vue files.
      js: 'babel?optional[]=runtime&stage=2',
      css: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader'
      ),
      less: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
      ),
      sass: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'sass?sourceMap'
      )
    }
  },
  eslint : {
    configFile : paths.project('.eslintrc'),
    failOnError : globals.__PROD__,
    emitWarning : globals.__DEV__
  }
}

export default webpackConfig
