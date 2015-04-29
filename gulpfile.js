var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var docco = require("gulp-docco");
var rename = require("gulp-rename");

var srcFiles = [
  'src/routing.coffee'
];



gulp.task('default', [ 'dist', 'docs' ]);


gulp.task('dist', function() {
  return gulp.src(srcFiles)
    .pipe(concat('chip-routing.js'))
    .pipe(coffee({ bare: true })).on('error', gutil.log)
    .pipe(gulp.dest('dist'))
    .pipe(rename('chip-routing.min.js'))
    .pipe(uglify()).on('error', gutil.log)
    .pipe(gulp.dest('dist'))
});



gulp.task('docs', function() {
  return gulp.src(srcFiles)
    .pipe(docco())
    .pipe(gulp.dest('docs'))
});


gulp.task('watch', [ 'default' ], function() {
  return gulp.watch('src/*.coffee', [ 'default' ]);
});
