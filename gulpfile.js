// *************************************
//
//   Rafters
//   -> Stupid simple template builder
//
// *************************************

'use strict';

// -------------------------------------
//   Plugins 
// -------------------------------------

var gulp            = require("gulp");
var autoprefixer    = require("gulp-autoprefixer");
var connect         = require("gulp-connect");
var file            = require("gulp-file");
var ghPages         = require("gulp-gh-pages");
var nunjucksRender  = require("gulp-nunjucks-render");
var plumber         = require("gulp-plumber");
var sass            = require("gulp-sass");
var webpack         = require("gulp-webpack"); 

// -------------------------------------
//   Server
// -------------------------------------

gulp.task("connect", function() {
  connect.server({
    root: "build",
    livereload: true
  });
});

// -------------------------------------
//   Tasks
// -------------------------------------

// ----- Assets ----- //

gulp.task("files", function() {
  gulp.src("./source/assets/files/**/*")
    .pipe(plumber())
    .pipe(gulp.dest("./build/assets/files/"))
    .pipe(connect.reload());
});

gulp.task("images", function() {
  gulp.src("./source/assets/images/**/*")
    .pipe(plumber())
    .pipe(gulp.dest("./build/assets/images/"))
    .pipe(connect.reload());
});

gulp.task("styles", function() {
  gulp.src("./source/assets/stylesheets/*.sass")
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./build/assets/stylesheets/"))
    .pipe(connect.reload());
});

gulp.task("scripts", function() {
  gulp.src("./source/assets/javascripts/**/*.js")
    .pipe(plumber())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest("./build/assets/javascripts/"))
    .pipe(connect.reload());
});

gulp.task("template", function() {
  gulp.src("./source/**/*.html")
    .pipe(plumber())
    .pipe(nunjucksRender({
      path: ["./source/shared"]
    }))
    .pipe(gulp.dest("./build"))
    .pipe(connect.reload());
});

gulp.task("watch", ["files", "images", "styles", "scripts", "template"], function() {
  gulp.watch(["./source/**/*.html"], ["template"]);
  gulp.watch(["./source/assets/files/**/*"], ["files"]);
  gulp.watch(["./source/assets/images/**/*"], ["images"]);
  gulp.watch(["./source/assets/javascripts/**/*"], ["scripts"]);
  gulp.watch(["./source/assets/stylesheets/**/*"], ["styles"]);
});

// ----- Default ----- //

gulp.task("default", ["connect", "watch"]);

// -------------------------------------
//   Tasks
// -------------------------------------

gulp.task('deploy', function() {
  file('CNAME', 'demo.syllabusapp.com')
    .pipe(gulp.dest('./build'));
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

