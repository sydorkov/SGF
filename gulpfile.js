"use strict";

const gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


gulp.task('less', function () {
    var devPath = "./dev/",
        buildPath = "./build/";
    return gulp.src(devPath + 'style.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildPath))
        .pipe(cssmin().on('error', function(err) {
            console.log(err);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(buildPath));;

});

gulp.task("build", ["less"]);