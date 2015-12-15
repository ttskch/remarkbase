var gulp = require('gulp-param')(require('gulp'), process.argv);
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var symlink = require('gulp-symlink');
var addSrc = require('gulp-add-src');
var file = require('gulp-file');
var browserSync = require('browser-sync');

var serving = false;
gulp.task('serve', ['watch'], function () {
    serving = true;
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
    gulp.watch('index.html', ['bs-reload']);
    gulp.watch('slide.md', ['bs-reload']);
});

gulp.task('bs-reload', function () {
    if (serving) {
        browserSync.reload();
    }
});

gulp.task('bs-reload-delayed', function () {
    if (serving) {
        setTimeout(browserSync.reload, 500);
    }
});

gulp.task('build', ['build:init', 'build:css', 'build:js', 'build:theme']);

gulp.task('build:init', function () {
    file('theme.min.css', '', {src: true}).pipe(gulp.dest('assets/css'));
    file('theme.min.js', '', {src: true}).pipe(gulp.dest('assets/js'));
});

gulp.task('build:css', function () {
    gulp.src('assets/src/sass/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('base.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('build:js', function () {
    gulp.src('assets/src/js/*.js')
        .pipe(plumber())
        .pipe(concat('base.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
});

gulp.task('build:theme', ['build:theme:css', 'build:theme:js']);

gulp.task('build:theme:css', function () {
    gulp.src('theme/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(addSrc('theme/**/*.css'))
        .pipe(concat('theme.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('build:theme:js', function () {
    gulp.src('theme/**/*.js')
        .pipe(plumber())
        .pipe(concat('theme.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('assets/src/sass/*.scss', ['build:css', 'bs-reload']);
    gulp.watch('assets/src/js/*.js', ['build:js', 'bs-reload']);
    gulp.watch('theme', ['build:theme', 'bs-reload-delayed']);
    gulp.watch('theme/**/*.*', ['build:theme', 'bs-reload-delayed']);
});

gulp.task('slide', function (target) {
    gulp.src(target)
        .pipe(symlink('slide.md', {force: true}));
});

gulp.task('theme', function (target) {
    gulp.src(target)
        .pipe(symlink('theme', {force: true}));
});

gulp.task('default', ['serve']);
