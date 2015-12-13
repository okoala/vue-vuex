require('babel-core/register')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webpackConfig = require('./_development').default
var config = require('../../config').default
var paths = config.get('utils_paths')

// webpackConfig.context = '/Users/koalahuang/Code/vue-vuex'

var compiler = webpack(webpackConfig)
var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  contentBase: `http://${config.get('server_host')}:${config.get('server_port')}`,
  // or: contentBase: "http://localhost/",

  hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,

  // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
  // Use "*" to proxy all paths to the specified server.
  // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
  // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
  // proxy: {
  //   '/api/*': `http://${config.get('server_host')}:${config.get('server_port')}`
  // },

  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  lazy: false,
  inline: true,
  filename: "app.js",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: '/public/',
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: { colors: true },
})
console.log('port', config.get('webpack_port'))
server.listen(config.get('webpack_port'), "localhost", function() {
  console.log('webpack dev server started!')
})
