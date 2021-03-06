var gulp		= require('gulp');
// var browserSync	= require('browser-sync').create();
var sass 		= require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
	.pipe(sass())
	.pipe(gulp.dest("src/css"));
});

gulp.task('js', function(){
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
	.pipe(gulp.dest("src/js"));
});

gulp.task('default', gulp.series('js','sass'));