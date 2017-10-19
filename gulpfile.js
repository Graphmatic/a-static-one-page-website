var gulp      = require('gulp'),
    rename    = require('gulp-rename'),     // Renommage des fichiers
    cssnano = require('gulp-cssnano'), // Minification des CSS
    concatCss = require('gulp-concat-css'), // css concat
    concatJs  = require('gulp-concat'), // js concat et remplacement link in html
    uglify    = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    imageMin = require('gulp-imagemin'), // Minification/Obfuscation des JS
    gulpsync = require('gulp-sync')(gulp);

// CSS
gulp.task('css', function()
{
    return gulp.src('./css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css/minified'))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest('./dist/css'));
});

// JS
gulp.task('js', function()
{
    return gulp.src(['./js/jquery.js', 'js/jquery-ui.min.js', 'js/jquery.philter.min.js', './js/bootstrap.min.js', './js/wow.min.js', 'js/bigmenu.js', './js/main.js'])
        .pipe(uglify())
        .pipe(concatJs('funk.js'))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('js2', function() {
    return gulp.src(['./js/html5shiv.js', './js/respond.min.js'])
        .pipe(uglify())
        .pipe(concatJs('fb.js'))
        .pipe(gulp.dest('./dist/js'))
});


//HTML
gulp.task('js3', function() {
    gulp.src('./index.html')
        .pipe(htmlreplace({
            'fbjs': 'js/fallback.js',
            'funkjs': 'js/funk.js',
            'css': 'js/style.js'
        }))
        .pipe(gulp.dest('./dist'));
});

// ressources
gulp.task('ressources', function()
{
    return gulp.src('./ressources/*.*')
        .pipe(gulp.dest('./dist/ressources'));
});

//FONTS
gulp.task('fonts', function()
{
    return gulp.src('./fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'));
});

// "img" = Images optimisées
gulp.task('img', function ()
{
    return gulp.src(['./images/*.{png,jpg,jpeg,gif,svg}', './images/**/*.{png,jpg,jpeg,gif,svg}'], { base: './'})
        .pipe(imageMin())
        .pipe(gulp.dest('./dist'));
});

//PHP
gulp.task('php', function()
{
    return gulp.src('./sendemail.php')
        .pipe(gulp.dest('./dist'));
});

// "prod"
gulp.task('prod', gulpsync.sync(['css', 'js', 'js2', 'js3', 'ressources', 'fonts', 'img', 'php']));

// Tâche "watch"
gulp.task('watch', function () {
        gulp.watch('./css/*.css', ['css']);
        gulp.watch('./js/*.js', ['js']);
        gulp.watch('./images/*.{png,jpg,jpeg,gif,svg}', ['img']);

});