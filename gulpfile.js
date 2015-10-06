"use strict"
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var eslint = require("gulp-eslint");
var babel = require("gulp-babel");
var SOURCE_PATH = ["./src/**/*.js", "./src/**/*.jsx"];

gulp.task("lint", function() {
  return gulp.src(SOURCE_PATH)
             .pipe(plumber()) // Keep task alive on build errors.
             .pipe(eslint())
             .pipe(eslint.format());
});

gulp.task("build", function() {
  return gulp.src(SOURCE_PATH)
    .pipe(babel({ stage: 1 }))
    .pipe(gulp.dest("./"));
});

gulp.task("prepublish", ["build"]);
gulp.task("watch", function(callback) { gulp.watch("./src/**/*", ["build"]) });
gulp.task("default", ["build", "watch"]);
