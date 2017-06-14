var gulp = require('gulp');
var sass = require('gulp-sass');
var browser = require('browser-sync');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

gulp.task('buildScss',function(){
	gulp.src('./sass/*scss')
		.pipe(sass({outputStyle:'compact'}))
		.pipe(gulp.dest('./css'))
});
gulp.task('browserSync',function(){
	browser({
		proxy: 'http://localhost:83/Doubo/Test/0614',
		files: ['./*.html','./css/*css']
	});
	gulp.watch('./sass/*.scss',['buildScss'])
});
gulp.task('minifycss',function(){
	gulp.src('./css/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('minified/css'))
});
gulp.task('minifyjs',function() {
	gulp.src('./js/*.js')
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('minified/js'))
})
