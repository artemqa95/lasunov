var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {

    return gulp.src("./*.css")
        .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('css', function() {


    browserSync.init({
        server: "./"
    });

    gulp.watch("./*.css", gulp.series('css'));
    gulp.watch("./*.js").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));