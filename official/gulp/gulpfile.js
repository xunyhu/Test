var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

gulp.task('minifycss',function(){
	gulp.src('../css/*.css')
		.pipe(minifycss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../css/dist'))
});

gulp.task('minifyjs',function() {
	gulp.src('../js/*.js')
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('../js/dist'))
})