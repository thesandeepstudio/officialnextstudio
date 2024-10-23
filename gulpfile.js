const gulp = require('gulp');
const exec = require('gulp-exec');

// Task to build the website
gulp.task('build', function () {
    // Adjust this to fit your actual build command (if needed)
    return gulp.src('*')
        .pipe(exec('npm run build')); // Make sure 'npm run build' is defined in your package.json
});

// Task to deploy the website to Cloudflare using wrangler
gulp.task('deploy', function () {
    return gulp.src('*')
        .pipe(exec('npx wrangler publish')); // Using npx for wrangler command
});

// Default task: build and deploy
gulp.task('default', gulp.series('build', 'deploy'));
