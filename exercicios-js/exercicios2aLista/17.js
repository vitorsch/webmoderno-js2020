function somarNumeros ( dados = []) {
    return dados.reduce( function(acumulator, atual) {
        return acumulator + atual
    })
}

const numeros = [10, -5, 5, 5, -5]
console.log(somarNumeros(numeros))