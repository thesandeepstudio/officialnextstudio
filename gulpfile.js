const gulp = require('gulp');
const clean = require('gulp-clean'); // Make sure you have this package if using clean
// Import other necessary plugins here, e.g., for CSS/JS processing

// Clean task
gulp.task('clean', function () {
    return gulp.src('dist', { allowEmpty: true, read: false }) // Adjust as necessary
        .pipe(clean());
});

// Example build task (update as necessary)
gulp.task('build', function () {
    return gulp.src('src/**/*') // Adjust the path as necessary
        .pipe(gulp.dest('dist')); // Destination folder
});

// Watch task
gulp.task('watch', function () {
    gulp.watch('src/**/*', gulp.series('clean', 'build')); // Watch all files in src
});

// Default task
gulp.task('default', gulp.series('clean', 'build', 'watch'));
