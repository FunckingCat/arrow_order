const gulp = require('gulp');
const sass = require('gulp-sass');

function style () {
    return gulp.src('./**/*.scss').pipe(sass()).pipe(gulp.dest(function(file){
        return file.base;
    }))
}

function watch () {
    gulp.watch('./**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
