const { src } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});
// function buildCSS(done) {
//     src('css/**/**.css')
//     done();
// }