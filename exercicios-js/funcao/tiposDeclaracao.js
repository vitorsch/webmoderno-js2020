console.log(soma(3, 4))
// function declaration
function soma(x, y) {
    return x + y
}
/* a principal diferenteça entre declaration e expression é que a função já fica
disponivel antes mesmo de ser declarada. Logo ambas funtion expression, qualquer
chamada delas, deve ser feita após atribuição dos valores. */
//function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const multi = function mult(x, y) {
    return x * y
}
