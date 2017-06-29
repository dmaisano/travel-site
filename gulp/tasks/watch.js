var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){
  browserSync.init({
    notify: false, // disables browser-sync notifications in top-right corner
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function() { // gulp.task('styles') will run within this task
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
