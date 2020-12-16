const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')// cuidado com a fraca tipagem do JS, aceitando qualquer tipo
// de entrada, indicado fazer tratamento