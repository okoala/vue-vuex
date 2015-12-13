require('babel-core/register')

var meta = require('../package.json'),
    express = require('express'),
    swig = require('swig'),
    compress = require('compression'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    lusca = require('lusca'),
    path = require('path'),
    app = module.exports = express(),
    middleware = ['csrf', 'router', 'proxy', 'static', 'error']

var config = require('../config').default
var paths = config.get('utils_paths')
var content = ''
var globals = config.get('globals')

var indexPage = ''
if (config.get('env') === 'development') {
  indexPage = 'http://' + config.get('server_host') + ':' + config.get('webpack_port') + '/public/index.html'
} else {
  indexPage = paths.dist('public/index.html')
}

globals.process = {
  env: {
    NODE_ENV: globals.NODE_ENV
  }
}

// Object.keys(globals).forEach(function(key, index) {
//   content += 'window.' + key + '=' + JSON.stringify(globals[key]) + ';\n';
// });

// app.set('content', content);

// lazy load middlewares
middleware.forEach(function (m) {
    middleware.__defineGetter__(m, function () {
        return require('./middleware/' + m);
    });
})

process.on('uncaughtException', function (err) {
  (app.get('logger') || console).error('Uncaught exception:\n', err.stack)
})

// 使用swig作为模板引擎
app.engine('html', swig.renderFile)
app.set('name', meta.name)
app.set('version', meta.version)
app.set('port', config.get('server_port'))
app.set('root', paths.project())
app.set('views', path.resolve(__dirname, '../').replace(/\/+$/, ''))
app.set('view engine', 'html')
app.set('view cache', config.get('view_cache'))
app.set('logger', console)
app.enable('trust proxy')

swig.setDefaults({
  tagControls: ['<%', '%>'],
  cache: config.get('view_cache')
})
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'very-cool',
    resave: true,
    saveUninitialized: true
}))

// 打印配置信息~
// app.use(favicon(paths.dist('public/favicon.ico')))

// 关闭lusca的csrf，使用自定义的
app.use(lusca({
    csrf: false,
    xframe: 'SAMEORIGIN',
    p3p: false,
    xssProtection: true
}))
// app.use(middleware.csrf());
app.use(compress())
app.use(middleware.router({index: indexPage}))
app.use('/api', middleware.proxy(config.get('api_target')))
app.use(middleware.static(paths.dist()))
app.use(middleware.error())

if (require.main === module) {
    app.listen(app.get('port'), function() {
        console.log('[%s] Express server listening on port %d',
            app.get('env').toUpperCase(), app.get('port'))
    })
}
