var 
	gulp = require('gulp'),
	sass = require('gulp-sass');

var 
	source = 'source/',
	dest = 'build';

var
	css = {
		in: source + 'scss/main.scss',
		watch:[ source + 'scss/**/*' ],
		out: dest + 'css/',
		sassOpts: {
			outputStyle: 'nested',
			precision: 3,
			errLogToConsole: true
		}
	}
gulp.task('sass', function(){
	return gulp.src(css.in)
		.pipe(sass(css.sassOpts))
		.pipe(gulp.dest(css.out))
})

gulp.task('default', function(){
	gulp.watch(css.watch, ['sass']);
})