const menor = (num1, num2) => num1 <= num2 ? num1 : num2

function menorNumero ( dados = [] ) {
    return dados.reduce(menor)
}

console.log(menorNumero([5, -15, 50, 3]))

// Outra resolução mais simples

function menorNumero2 ( dados = [] ) {
    return Math.min(...dados)
}

console.log(menorNumero2([5, -15, 50, 3]))

