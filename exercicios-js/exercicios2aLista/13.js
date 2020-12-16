const filtroNumeros = dado => typeof dado == "number"

function filtrarNumeros (dados = []){
    const filtrado = dados.filter(filtroNumeros)
    return filtrado
} 

console.log(filtrarNumeros(['a', 2, 3, 4, 'alo']))