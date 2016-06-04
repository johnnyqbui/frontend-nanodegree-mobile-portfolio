var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss');

gulp.task('scripts', function() {
	gulp.src('views/js/main.js')
	.pipe(uglify())
	.pipe(rename('main.min.js'))
	.pipe(gulp.dest('views/js/'));
});

gulp.task('styles', function() {
	gulp.src('views/css/bootstrap-grid.css')
	.pipe(uglifycss({
		"maxLineLen": 80,
      "uglyComments": true
  }))
	.pipe(rename('bootstrap-grid.min.css'))
	.pipe(gulp.dest('views/css/'));
});

gulp.task('default',['scripts', 'styles']);