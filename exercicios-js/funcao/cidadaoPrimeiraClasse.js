// Funcao em JS é First-Class Object (Citizens)
// High-order function 

// Criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazena em uma array
const array = [function(a, b) { return a + b}, fun1, fun2] //array de funcoes
console.log(array[0](2, 3))

// Armazenas em um atribudo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar funcao como parametro para outra funcao
function run(fun) {
    fun()
}

run( function () { console.log('Executando...') } )


// Uma funcao pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)
//Equivalentes ^
const cincoMais= soma(2,3)
cincoMais(4)