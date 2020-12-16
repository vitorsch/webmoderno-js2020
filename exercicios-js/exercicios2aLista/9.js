function repetir (elemento, repeticoes) {
    const newArray = []
    for( let i = 0; i < repeticoes; i++){
        newArray.push(elemento)
    }
    return newArray
}

console.log(repetir("alo",3))
console.log(repetir(7,3))