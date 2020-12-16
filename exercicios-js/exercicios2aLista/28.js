function filtraPorQuantidade ( numeros = [], digitos) {

    const newArray = numeros.filter ( numero => (numero / Math.pow(10, digitos - 1)) >= 1 && (numero / Math.pow(10, digitos - 1)) <= 9 ) 
    return newArray
}
numeros = [38, 2, 365, 10, 125, 11]
console.log(filtraPorQuantidade(numeros, 2))
console.log(Math.pow(10,2))

//ou ainda
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
    const quantidadeDeDigitos = String(numero).length
    return quantidadeDeDigitos === quantidadeDesejada
    })
}

console.log(String(22).length)

console.log(Number("22"))