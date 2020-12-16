function inverso(entrada) {
    if (entrada === true || entrada === false) {
        return !entrada
    } else if (typeof entrada == "string") {
        return "Informe um booleano ou numero"
    } else {
        return entrada * (-1)
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(1))
console.log(inverso(-2))
console.log(inverso("awew"))