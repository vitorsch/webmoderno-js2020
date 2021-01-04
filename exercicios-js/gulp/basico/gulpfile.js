const gulp = require ('gulp')
const { series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    
    return cb()
}
const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    
    return cb()
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt') // pega todos arquivos na pastaA que sejam do formato txt
        .pipe(gulp.dest('pastaB'))
        // .pipe(functionsDeTransformacao())
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim)