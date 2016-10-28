// add Modulos
var gulp          = require('gulp'),
    jade          = require('gulp-jade'),
    autoPrefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    sass          = require('gulp-sass'),
    clearCss      = require('gulp-clean-css'),
    gulpIf        = require('gulp-if'),
    env           = process.env.NODE_ENV || 'dev',
    uglify        = require('gulp-uglify'),
    browserSync   = require('browser-sync').create();

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("_assents/css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("_build/css"))
    .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "_build"
    });
    gulp.watch("_assents/scss/*.scss", ['sass']);
    gulp.watch("_assents/*.html").on('change', browserSync.reload);
    gulp.watch("_assents/*.js").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
