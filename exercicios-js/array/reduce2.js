const alunos = [ 
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]


// Desafio 1: Todos os alunos são bolsistas?
const resultado1 = alunos.map(a => a.bolsista).reduce( function (acumulator, atual){
    return acumulator && atual
})

console.log('Desafio1',resultado1)

// Desafio 2: Algum aluno é bolsista?

const resultado2 = alunos.map(a => a.bolsista).reduce( function(acumulator, atual){
    return acumulator || atual
})

console.log('Desafio2',resultado2)


// Resolução usando funcao auxiliar
//Desafio 1

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))