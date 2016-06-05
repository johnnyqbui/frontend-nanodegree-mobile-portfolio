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

#### Gulp plugins:
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

#### Image compressor:
* [Optimazilla](http://optimizilla.com/)