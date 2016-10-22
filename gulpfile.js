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
    browserSync   = require('browser-sync').create(),
    reload        = browserSync.reload;
