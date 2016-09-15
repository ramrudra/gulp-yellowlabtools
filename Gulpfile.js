/*
 * gulp-yellowlabtools
 * https://github.com/ramrudra/gulp-yellowlabtools
 *
 */

var gulp = require('gulp');
require('gulp-grunt')(gulp); // add all the gruntfile tasks to gulp

// run them like any other task
gulp.task('default', [
  // run grunt yellowlabtools
  'grunt-yellowlabtools:axelerant'
]);

gulp.task('test', [
  // run grunt test
  'grunt-test'
]);
