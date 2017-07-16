let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();
let postCSS = require('gulp-postcss');
let cssImport = require('postcss-import');
let mixins = require('postcss-mixins');
let cssVars = require('postcss-simple-vars');
let nested = require('postcss-nested');
let autoprefixer = require('autoprefixer');
let cleanCSS = require('gulp-clean-css');
let rename = require("gulp-rename");
let plumber = require('gulp-plumber');

// Browser-Sync Task with functionality
gulp.task('browser-sync', () => {
  browserSync.init(["index.html", "assests/images/**/*.png", "./app/dist/styles/*.css"], {
    notify: false, // disables browser-sync notifications in top-right corner
    server: {
      baseDir: "./"
    }
  });
});

// Compile PostCSS to regular CSS to be used in the browser
gulp.task('post-css', () => {
  gulp.src('./app/assets/styles/styles.pcss')
    .pipe(plumber())
    .pipe(postCSS([cssImport, mixins, cssVars, nested, autoprefixer]))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min', extname: '.css' }))
    .pipe(gulp.dest('./app/dist'));
});

// Task to Inject CSS without browser-sync doing a full refresh (f5)
gulp.task('cssInject', ['post-css'], () => { // gulp.task('post-css') will run within this task
  return gulp.src('./app/dist/styles.css')
    .pipe(browserSync.stream());
});

// Default task that will run which handles the tasks above
gulp.task('default', ['post-css', 'cssInject', 'browser-sync'], () => {
  gulp.watch('./app/assets/styles/**/*.pcss', ['post-css']);
  gulp.watch('./app/dist/styles.min.css', ['cssInject']);
});
