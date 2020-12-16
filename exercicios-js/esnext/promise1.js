let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
//Promessa gera apenas um unico valor( sendo um objeto, uma lista ou array etc)
//cumprirPromessa = resolve
// console.log(typeof p)

const primeiroElemento = (array) => array[0]
//Essas duas funções sao equivalentes
const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
//este trecho poderia ser acomplado diretamente após a declaração da Promise
//na linha 6

//.then pode ser chamado repetidas vezes para diferentes usos
// o resultado do then é passado para o próximo then e assim sucessivamente
//.then(v => console.log(v)) = then(console.log)