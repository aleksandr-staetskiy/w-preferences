module.exports = function() {
  $.gulp.task('img', function () {
    return $.gulp.src('src/static/img/*.{png,jpg,svg}')
      // .pipe($.gp.tinypng('dLgHNpGZ0yRW788WMHGwfBnxr0DlLHD9'))
      .pipe($.gulp.dest('build/static/img/'));
});
}