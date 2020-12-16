const somaPrecos = (acumulator, atual) => acumulator + atual

function calcMedia( dados = []) {

    return dados.reduce(somaPrecos) / dados.length
}

console.log(calcMedia([1, 2, 3, 4, 5]))