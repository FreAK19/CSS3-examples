'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');


var image_prop = {
	      width : 430,
	      height : 300,
	      crop : true,
	      upscale : false
	    };


gulp.task('images', function(){
    gulp.src(['src/example8/*.png', 'src/example8/*.jpg'])
        .pipe(imagemin({
        	optimizationLevel: 10,
        }))
        .pipe(imageResize(image_prop))
        .pipe(gulp.dest('All examples/example8'));
});
