var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssImport = require('postcss-import');
var cssVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var autoprefixer = require('autoprefixer');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
