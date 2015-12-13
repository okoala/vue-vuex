'use strict';

var express = require('express'),
    app = require('../index'),
    router = express.Router()

var http = require('http')
var url = require('url')

router.get('*', function (req, res, next) {
  if (!(req.url.indexOf('/public') === 0) &&
      !(req.url.indexOf('/api') === 0)) {
    var index = router.options.index
    if (index.indexOf('http') === 0) {
      var options = url.parse(index)
      options.method = req.method
      var _proxyReq = http.request(options, function(_proxyRes) {
        _proxyRes.pipe(res)
      })
      if (!req.readable) {
        _proxyReq.end()
      } else {
        req.pipe(_proxyReq)
      }
    } else {
      res.render(router.options.index)
    }
    return
  }

  next()
})

module.exports = function (options) {
    router.options = options || {}
    return router
}
