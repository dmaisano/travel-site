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
let svgSprite = require('gulp-svg-sprite');
let runSequence = require('run-sequence');
let del = require('del');
let hexrgba = require('postcss-hexrgba');
let webpack = require('webpack');

// Template for that createSprite task will use in order
// to generate a sprite svg and the necessary css file
var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './app/dist/sprite.hbs'
				}
			}
		}
	}
}

// Task that will delete existing sprites to avoid conflicts
gulp.task('clean-sprite', () => {
	return del(['./app/dist/sprite', './app/dist/sprite.svg', './app/assets/styles/modules/_sprite.pcss'])
});

// Task to create a sprite for loading optimization
gulp.task('create-sprite', ['clean-sprite'], () => {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/dist/sprite'));
});

// Move and rename sprite.svg to the /dist/ folder
gulp.task('move-sprite-svg', ['create-sprite'], () => {
	return gulp.src('./app/dist/sprite/css/**/*.svg')
		.pipe(rename({basename: 'sprite'}))
		.pipe(gulp.dest('./app/dist'));
});

// Move and rename sprite.pcss to the /dist/ folder
gulp.task('move-sprite-css', ['create-sprite'], () => {
	return gulp.src('./app/dist/sprite/css/*.css')
		.pipe(rename({basename: '_sprite', extname: '.pcss'}))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

// removes the sprite folder from the /dist/
gulp.task('end-clean-sprite', ['move-sprite-svg', 'move-sprite-css'], () => {
	return del('./app/dist/sprite');
})

// Browser-Sync Task with functionality
gulp.task('browser-sync', () => {
  browserSync.init(["index.html", "assests/images/**/*.png", "./app/dist/styles/styles.min.css", "./app/dist/app.bundle.js"], {
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
    .pipe(postCSS([cssImport, mixins, cssVars, nested, hexrgba, autoprefixer]))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min', extname: '.css' }))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('webpack', () => {
  webpack(require('./webpack.config.js'), () => {
    //console.log("Bundled javascript");
  });
});

// Default task that will run which handles the tasks above
gulp.task('default', ['post-css', 'webpack', 'browser-sync'], () => {
  gulp.watch('./app/assets/styles/**/*.pcss', ['post-css']);
  gulp.watch('./app/assets/styles/styles.pcss', ['post-css']);
  gulp.watch('./app/assets/scripts/*.js', ['webpack']);
});

// Task that will handle the creation and sorting of sprite dependencies
gulp.task('sprite', () => {
	runSequence(['clean-sprite', 'create-sprite', 'move-sprite-svg', 'move-sprite-css', 'end-clean-sprite'], 'post-css');
});
// 'post-css' will be run last in the order of the sequence above
