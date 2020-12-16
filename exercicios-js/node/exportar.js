console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}//Esse objeto não será retornado no modulo

//Quem é retornado é o module.exports
//O exports e this são apenas referencias para o module.exports

console.log(module.exports)
module.exports = { publico: true }