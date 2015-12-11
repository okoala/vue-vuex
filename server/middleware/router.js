'use strict';

var express = require('express'),
    app = require('../index'),
    router = express.Router();

router.get('*', function (req, res, next) {
  if (!(req.url.indexOf('/public') === 0) &&
      !(req.url.indexOf('/api') === 0)) {
    res.render(router.options.index, { content: app.get('content')});
    return;
  }

  next();
});

module.exports = function (options) {
    router.options = options || {};
    return router;
};
