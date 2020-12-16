function sorteV( numero ) {
    const min = 1
    const max = 10
    const valor = parseInt(Math.random() * (max - min) + min)

    return valor == numero ? `Parabéns! O número sorteado foi ${valor}` : 
    `Que pena! O número sorteado foi ${valor}`
}

console.log(sorteV(2))
console.log(sorteV(3))
console.log(sorteV(4))