const pessoa = { nome: 'João'}
// pessoa -> 123 -> {...}
pessoa.nome = 'Pedro' // altera os dados, e não o objeto
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' } ERRO! Pois não pode apontar o objeto para outro local

//congelar o objeto, não aceita nenhum tipo de modificação, nem dos dados
Object.freeze(pessoa) 

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'Joao '})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)


