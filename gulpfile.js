const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');

// Clean task
gulp.task('clean', function () {
    return gulp.src('dist', { allowEmpty: true, read: false })
        .pipe(clean());
});

// Build task
gulp.task('build', function () {
    // Minify and concatenate JavaScript files
    gulp.src('src/js/**/*.js') // Path to JavaScript files
        .pipe(concat('app.min.js')) // Concatenate files into app.min.js
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); // Output path for minified JS

    // Minify CSS file
    gulp.src('src/styles/styles.css') // Path to your CSS file
        .pipe(cleanCSS()) // Minify the CSS
        .pipe(gulp.dest('dist/styles')); // Output path for minified CSS

    // Optimize images
    gulp.src('src/image/**/*') // Path to image files (including all subfolders)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images')); // Output path for optimized images

    // Copy HTML and other files (like JSON, etc.)
    return gulp.src('src/**/*') // Copy all files from src to dist
        .pipe(gulp.dest('dist'));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch('src/**/*', gulp.series('clean', 'build')); // Watch all files in src
});

// Default task
gulp.task('default', gulp.series('clean', 'build', 'watch'));
