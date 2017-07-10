let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let rename = require("gulp-rename");

// Browser-Sync Task with functionality
gulp.task('browser-sync', () => {
  browserSync.init(["index.html", "assests/images/**/*.png", "./app/dist/styles/*.css"], {
    notify: false, // disables browser-sync notifications in top-right corner
    server: {
      baseDir: "app"
    }
  });
});

// Compile styles.scss (SASS to CSS)
gulp.task('sass', () => {
  gulp.src('sass/main.scss') // only the main sass file is required as it imports the other sass modules
    .pipe(sass({includePaths: ['scss']}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./app/dist'));
});

// Task to Inject CSS without browser-sync doing a full refresh (f5)
gulp.task('cssInject', ['sass'], () => { // gulp.task('sass') will run within this task
  return gulp.src('./app/dist/styles.css')
    .pipe(browserSync.stream());
});


// Default task that will run which handles the tasks above
gulp.task('default', ['sass', 'cssInject', 'browser-sync'], () => {
  gulp.watch('./app/assets/styles/**/*.css', ['sass']);
  gulp.watch("./app/dist/styles.min.css", ['cssInject']);
});
