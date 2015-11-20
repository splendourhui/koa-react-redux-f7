var gulp = require('gulp');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');
var webpack = require('webpack');
var config = require('./webpack.config');

gulp.task('webpack_client', function(cb) {
  webpack(config, function(err, stats) {
    if (err)
      throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack_client]", stats.toString());
    cb();
  });
});

gulp.task('stylesheets', function() {
  return gulp.src([
    './src/*.less',
    './src/*/*.less',
    './src/*/*/*.less',
    './src/*/*/*/*.less',
    './src/*/*/*/*/*.less'
  ])
    .pipe(less().on('error', gutil.log))
    .pipe(concatCss("app.bundle.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function() {
  gulp.run('webpack_client');
  gulp.run('stylesheets');

  gulp.watch([
    './src/*.js',
    './src/*/*.js',
    './src/*/*/*.js',
    './src/*/*/*/*.js',
    './src/*/*/*/*/*.js'
  ], ['webpack_client']);

  gulp.watch([
    './src/*.less',
    './src/*/*.less',
    './src/*/*/*.less',
    './src/*/*/*/*.less',
    './src/*/*/*/*/*.less'
  ], ['stylesheets']);
});
