var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

// gulp.task = chamada para criação de uma nova tarefa

gulp.task('compilar-sass', function() {
    return gulp.src(['*.scss', 'src/sass/*.scss']) // Busca todos os arquivos com extensão scss na pasta sass
        .pipe(sass().on('error', function(err) {
            console.log(err);
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('src/css'))
});

// Tarefa: Monitorar quando o scss for salvo para que o arquivo .css receba e converta essas mudanças
gulp.task('monitorar', function() {
    gulp.watch(['*/.scss', 'src/sass/*.scss'], gulp.series('compilar-sass', 'minificarCSS'));
    gulp.watch(['*/.html', 'src/*.html'], gulp.series('minificarHTML'));
});


// Tarefa:minificar os arquivos css/html e colocá-los no diretórios dist
gulp.task('minificarCSS', function() {
    return gulp.src(['src/css/*.css'])
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/'))
});
gulp.task('minificarHTML', function() {
    return gulp.src(['src/*.html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', gulp.series('monitorar'));