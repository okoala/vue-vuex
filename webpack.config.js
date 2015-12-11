require('babel-core/register');

var config   = require('./config');
module.exports = require('./build/webpack/' + config.get('env'));
