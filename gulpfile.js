var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 9000,
      defaultFile: 'index.html'
    }));
});



gulp.task('styles', function() {
    gulp.src('sass/revel.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});


gulp.task('default', ['styles', 'watch', 'webserver']);