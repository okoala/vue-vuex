require('babel-core/register');

var config = require('./config').default;
module.exports = require('./build/webpack/' + config.get('env'));
