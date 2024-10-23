const gulp = require('gulp');
const exec = require('gulp-exec');

// Task to build the website
gulp.task('build', function () {
    // You can adjust this to fit your site's build process (if needed)
    return gulp.src('*')
        .pipe(exec('npm run build')); // Replace 'npm run build' with your actual build command
});

// Task to deploy the website to Cloudflare using wrangler
gulp.task('deploy', function () {
    return gulp.src('*')
        .pipe(exec('wrangler publish'));
});

// Default task: build and deploy
gulp.task('default', gulp.series('build', 'deploy'));
