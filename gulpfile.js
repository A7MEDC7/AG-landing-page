// Include Gulp and plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const notifier = require('node-notifier');


// Define paths
const srcPath = 'src/assets/scss/**/*.scss';
const destPath = 'src/assets/css';

// Task to compile SCSS to CSS
function compileSCSS() {
  return gulp
    .src(srcPath)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(destPath));
}

// Watch for changes in SCSS files
function watchFiles() {
  gulp.watch(srcPath, compileSCSS)
  .on('change', () => {
   // Display a notification when a file change is detected
   notifier.notify({
     title: 'Gulp',
     message: 'SCSS files have been recompiled.',
     sound: true, // Enable notification sound
   });
 });
}

// Define default task
gulp.task('default', gulp.series(compileSCSS, watchFiles));
