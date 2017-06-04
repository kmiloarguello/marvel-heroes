var gulp = require('gulp');
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var minify = require("gulp-minify");
var babel = require("babelify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var watchify = require("watchify");

gulp.task('styles', function() {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
});



gulp.task('build' , function() { return compile(); });

gulp.task('default',['styles', 'build']);