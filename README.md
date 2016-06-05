## Website Performance Optimization portfolio project

This is a required project for a Udacity course. This project aims to optimize mobile and desktop versions of the original websites which can be found in the master branch.

### Optimizations

#### For Index.html:
* Inlined CSS
* Added #media to print
* Removed google fonts lnik
* Asynced google analytics and perfmatter.js
* Compressed images

#### For pizza.html:
* Inlined all CSS and included required bootstrap classes
* Removed CSS style tags on html elements and placed in CSS classes
* Asynced JS file
* Minified JS files via Gulp
* Modified resize pizza function to remove FSL
* Reduced number of sliding pizzas for better performance
* Compressed Images

### Resources used:

#### Gulp:
1. Installed gulp globally:
	```
	npm install --global gulp-cli
	```
2. Installed gulp and gulp-uglify to project development dependencies:
	```
	npm install --save-dev gulp
	npm install --save-dev gulp-uglify
	```
3. Created gulpfile.js with required plugins at root of project:
	```js
	var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

	gulp.task('scripts', function() {
		gulp.src('views/js/main.js')
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('views/js/'));
	});

	gulp.task('default',['scripts']);
	```
#### Gulp plugin found here:
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

#### Image compressor used:
* [Optimazilla](http://optimizilla.com/)

### How to open files:
* Click on link provided at top or [click this](http://johnnyqbui.github.io/frontend-nanodegree-mobile-portfolio):
	1. The link will take you to index.html
	2. Navigate by clicking on "Cam's pizzeria" to take you to pizza.html

<br>OR</br>

* Download/Clone repository and open index.html

