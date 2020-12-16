function segundoMaior( numeros = [] ) {
    const maior = Math.max(...numeros)
    
    return numeros.reduce( (anterior,atual) => (anterior < maior) && (anterior > atual || atual == maior) ? anterior : atual) 
}
const numeros = [12, 16, 1, 5]
console.log(segundoMaior(numeros))

//ou ainda
function segundoMaior2(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    return segundoMaior
}