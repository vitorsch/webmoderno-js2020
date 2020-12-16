// Arrow function
const soma = (a, b) => a + b
//ou com corpo, necessita do return
/* const soma = (a, b) => {
    return a + b
} */
//sempre são funções anônimas
console.log(soma(2,3))

//Arrow Function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log( texto = 'Node') {
    console.log(texto)
}
log('Sou mais forte')
log()//Assume valor padrao

// operador rest (...)
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))