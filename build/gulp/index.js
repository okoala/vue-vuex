var gulp = require('gulp')
var ncp = require('ncp').ncp

gulp.task('default', function (cb) {
  ncp('../../public', '../../.dist/public', cb)
})
