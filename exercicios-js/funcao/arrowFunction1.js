let dobro = function (a) {
    return 2 * a
}

//reescrevendo como funcao arrow

dobro = (a) => {
    return 2 * a;
}

//ou ainda

dobro = a => 2 * a // muito usada em funções de unica linha, com return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())

ola = _ => `Olá ${_}`
console.log(ola('Vitor'))
