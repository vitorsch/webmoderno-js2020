function inverte (obj = {} ) {
    const newObj = {}

    for ( let i in obj) {
        newObj[obj[`${i}`]] = i
    }

    return newObj
}

console.log(inverte({ a: 2, b: 3, c: 4}))

//Ou ainda
function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverter({ a: 2, b: 3, c: 4}))
