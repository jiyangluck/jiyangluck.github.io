var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('add', function(){
  return gulp.src('./*')
    .pipe(git.add());
});

gulp.task('commit', function(){
  return gulp.src('./*')
    .pipe(git.commit('by gulps'));
});

gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('default',["add","commit","push"]);