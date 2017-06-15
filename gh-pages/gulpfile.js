var gulp = require('gulp');
var sass = require('gulp-sass');
var browser = require('browser-sync');

//编译scss文件
gulp.task('sass',function(){
	gulp.src('./sass/*scss')
		.pipe(sass({outputStyle:'compact'}))
		.pipe(gulp.dest('./css'))
});
//浏览器热更新
gulp.task('default',function(){
	browser({
		proxy: 'http://localhost:83/Doubo/Test/gh-pages',
		files: ['./*.html','./css/*css','./js/*js']
	});
	gulp.watch('./sass/*.scss',['sass'])
})
