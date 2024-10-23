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
        .pipe(plumber()) // Prevents pipe breaking caused by errors
        .pipe(exec('npm run build')) // Runs the build command
        .pipe(exec.reporter()); // Reports the result of the exec command
}));

// Deploy task
gulp.task('deploy', function () {
    return gulp.src('*') // Adjust if you want to specify a specific path for deployment
        .pipe(plumber())
        .pipe(exec('npx wrangler publish')) // Deploys using wrangler
        .pipe(exec.reporter());
});

// Default task: build and deploy
gulp.task('default', gulp.series('build', 'deploy'));
