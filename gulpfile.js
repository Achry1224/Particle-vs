var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('js', function () {
    gulp.src('src/*.js')
        .pipe(minify({
            noSource: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js']);