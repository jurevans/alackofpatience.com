'use strict';

var gulp = require('gulp'),
    sass = require("gulp-sass"),
    bourbon = require('node-bourbon').includePaths,
    neat = require('node-neat').includePaths,
    browserSync = require('browser-sync');

gulp.task('default', ['sass']);

// Compile SASS files
gulp.task("sass", function() {
  gulp.src("assets/styles/*.scss")
    .pipe(sass({
      includePaths: bourbon,
      includePaths: neat
    }))
    .pipe(gulp.dest("dist/dist/styles"))
    .pipe(browserSync.reload({
      stream: true
  }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist/dist'
    }
  })
});

// Live reload anytime a file changes
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('assets/styles/*.scss', ['sass']);
  gulp.watch('dist/dist/*.html').on('change', browserSync.reload);
});
