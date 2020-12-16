// novo recurso no ES2015 (echman Scrip JS)

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// {} -> destructuring
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa 
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
//console.log(ag, num) ERRO
// tentativa de acesso invalido, tomar cuidado ao usar destructuring
//pois pdoe acabar acessando algo que nem existe, e dando erro