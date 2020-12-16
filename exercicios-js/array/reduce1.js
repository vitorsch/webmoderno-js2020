const alunos = [ 
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulator, atual){
    console.log(acumulator, atual)
    return acumulator + atual
}, 0) //Esse 0 final se soma ao final do reduce. O acumulador também pode ser array
//e ao final se somar várias arrays

console.log(resultado)

