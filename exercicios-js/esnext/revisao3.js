// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // array dos valores
console.log(Object.entries(obj)) // array de array de [chave,valor]
console.log(Object.keys(obj)) //array de chaves ( variaveis do obj )


// Melhorias na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {//função sem escrever function
        return 'Oi'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
const auau = new Cachorro()
console.log(new Cachorro().falar(), auau.falar())