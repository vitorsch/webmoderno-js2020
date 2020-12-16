// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)// imprime NaN, pois b fica undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8)//pega apenas os dois primeiros
imprimirSoma()

// Funcao com retorno

function soma(a, b = 1){
    return a + b;
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())