function simboloMais( repeticoes ) {
    let newString = ""

    for (let i = 0; i < repeticoes; i ++){
        newString += "+"
    }
    return newString
}

console.log(simboloMais(2))
console.log(simboloMais(3))
console.log(typeof simboloMais(4))