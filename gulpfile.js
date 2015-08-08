"use strict"
var gulp = require("gulp");
var eslint = require("gulp-eslint");
// var babel = require("gulp-babel");
var SOURCE_PATH = ["./components/**/*.js", "./components/**/*.jsx"];



gulp.task("lint", function() {
  return gulp.src(SOURCE_PATH)
    .pipe(eslint())
    .pipe(eslint.format());
});



gulp.task("default", ["lint"]);
