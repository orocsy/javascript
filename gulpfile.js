const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// Gulp dependencies go here
gulp.task('default',function(){
    //Gulp tasks goes here
 //eslint code
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
            .pipe(eslint())
            .pipe(eslint.format());
            //node code
    gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
    //browser code
     gulp.src("public/es6/**/*.js")
             .pipe(babel())
                     .pipe(gulp.dest("public/dist"));
  });
