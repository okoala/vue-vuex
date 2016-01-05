var gulp = require('gulp')
var ncp = require('ncp').ncp
var mkdirp = require('mkdirp')

gulp.task('mkdir', function (cb) {
  mkdirp.sync('../../.dist/public')
  cb()
})

gulp.task('default', function (cb) {
  ncp('../../public', '../../.dist/public', cb)
})
