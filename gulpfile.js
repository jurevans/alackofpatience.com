'use strict';

var gulp = require('gulp'),
    sass = require("gulp-sass"),
    bourbon = require('node-bourbon').includePaths,
    neat = require('node-neat').includePaths;

gulp.task('default', ['sass']);

// Compile SASS files
gulp.task("sass", function() {
  gulp.src("assets/styles/*.scss")
    .pipe(sass({
      includePaths: bourbon,
      includePaths: neat
    }))
    .pipe(gulp.dest("dist/styles"))
});

