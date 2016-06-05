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

gulp.task('default',['scripts']);