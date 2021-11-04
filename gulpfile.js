var del = require('del');
var gulp =require("gulp")
/*
* Gulpfile
* @version: 1.0.0 (Fri, 08 May 2020)
* @author: HtmlStream
* @license: Htmlstream (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

require('./gulpfiles/watch')
require('./gulpfiles/dist')
require('./gulpfiles/build')


gulp.task('clean:build', function() {
  return del.sync('build');
});