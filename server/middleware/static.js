'use strict';

var express = require('express'),
    path = require('path'),
    app = require('../index');

module.exports = function (dir) {
  return express.static(dir, {
    maxAge: app.get('env') === 'development' ? 0 : Infinity
  })
}
