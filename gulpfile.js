const gulp = require('gulp');
const exec = require('gulp-exec');
const plumber = require('gulp-plumber');
const del = require('del');

// Clean task to remove old build files
gulp.task('clean', function () {
    return del(['dist/**/*']); // Adjust according to your build folder
});

// Build task
gulp.task('build', gulp.series('clean', function () {
    return gulp.src('src/**/*') // Change this to your actual source files
        .pipe(plumber())
        .pipe(exec('npm run build'))
        .pipe(exec.reporter());
}));

// Deploy task
gulp.task('deploy', function () {
    return gulp.src('*')
        .pipe(plumber())
        .pipe(exec('npx wrangler publish'))
        .pipe(exec.reporter());
}));

// Default task: build and deploy
gulp.task('default', gulp.series('build', 'deploy'));
