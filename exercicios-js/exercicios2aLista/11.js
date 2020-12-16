function primeiroUltimo( dados ) {
    const newArray = []
    newArray.push(dados[0])
    newArray.push(dados[dados.length-1])
    return newArray
}
const array = [1, 'alo', 3, 4, 5, 'voce']
console.log(primeiroUltimo(array))