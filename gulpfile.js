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
    bootstrapSass = require('bootstrap-sass'),
    jquery        = require('jquery'),
    browserSync   = require('browser-sync').create();

// Bootstrap scss source


console.log( bootstrapSass);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("_assents/css/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(plumber.stop())
    .pipe(gulp.dest("_build/css"))
    .pipe(browserSync.stream());
});


// Static Server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "_build"
    });

});

// jade task
gulp.task('jade', function(){
  gulp.src('jadeFiles/*.jade')
  .pipe(plumber())
  .pipe(jade({
    pretty:true
  }))
  .pipe(plumber.stop())
  .pipe(gulp.dest('_build'))

});

// watch task
gulp.task('watch', function(){

  gulp.watch("_assents/css/*.scss", ['sass']);
  gulp.watch("jadeFiles/*.jade", ['jade']).on('change', browserSync.reload);
  gulp.watch("_assents/js/*.js").on('change', browserSync.reload);
})

// js task
gulp.task('js', function(){

  gulp.src('_assents/js/*.js')
  .pipe(gulp.dest('_build/js'))

});

// Default Task
gulp.task('default', ['serve', 'jade', 'watch', 'js']);
