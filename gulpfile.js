var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var zip = require('gulp-zip');

gulp.task('sass', function() {
    return gulp.src('*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('releases/'));
});

gulp.task('js', function() {
    return gulp.src('lib/bootstrap-sass-official/assets/javascripts/bootstrap.min.js')
               .pipe(gulp.dest('releases/'));
});

gulp.task('zip', ['sass', 'js'], function() {
    return gulp.src(['releases/**/*', '!release/**/*.zip'])
               .pipe(zip('colonial-branding.zip'))
               .pipe(gulp.dest('releases'));
});


gulp.task('build', ['zip']); 
