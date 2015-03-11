var gulp   = require('gulp'),
    connect = require('gulp-connect');
gutil= require('gulp-util'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    reactify   = require('reactify')

var path = require('path');
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 3000,
    livereload: true
  });
});

gulp.task('scripts', function() {
  browserify({
    insertGlobals: true,
    entries: ['./app/js/mainjs.jsx'],
    transform: ['reactify'],
    extensions: ['.jsx', '.js']
  })
      .bundle()
      .on('error', gutil.log)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./app/assets/js/'))
      .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./app/js/**/*.jsx', ['scripts']);
  gulp.watch('./app/js/**/*.js', ['scripts']);
});

gulp.task('default', ['connect', 'watch']);