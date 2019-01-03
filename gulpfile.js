'use strict';

const gulp = require('gulp');
const sass = require ('gulp-sass')

gulp.task('hello', (done)=>{
      console.log('Hello Gulp');
      done();
});


gulp.task('styles', done=>{
      gulp.src('./sass/**/*.scss') // Dossiers où prendre les fichiers
          .pipe(sass({ // pipe qui permet de filtrer les données
             outputStyle: 'expanded' // sortie en format compressed ou expanded
          }).on('error',sass.logError)
          )// affiche l'erreur s'il y a sans arrêter le script
          .pipe(gulp.dest('./dist/css')); // Fichier de destinations
      done();
});

gulp.task('sass-watcher', done=>{
      gulp.watch('./sass/**/*.scss',gulp.series('styles') );
      done();
});

gulp.task('dev', gulp.parallel('sass-watcher'));