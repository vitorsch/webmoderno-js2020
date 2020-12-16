let comparaComThis = function (param) {
    console.log(this == param)
}//tomar cuidado ao mexer com escopo global.

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global) //ira retornar false, pois a função compara foi 'bindada'
//com o obj
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
//na arrows, o this aponta para a função corrente, em que ele foi definido
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj)//bind nao sobreescreve a arrow
//function
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//na função arrow o this sempre apontara para o this no momento em que a função
// foi criada.