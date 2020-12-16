function paresIndicesPares( dados = [] ) {
    const newArray = []
    for ( let i in dados ) {
        if( i % 2 == 0 && dados[i] % 2 == 0) newArray.push(dados[i])
    }
    return newArray
}

const dados = [1, 2, 3, 4, 6]
console.log(paresIndicesPares(dados))
