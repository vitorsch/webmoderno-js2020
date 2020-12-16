// let( escopo de bloco ) e const
{
    var a = 2
    let b = 3
} 
console.log(a)
//console.log(b) ERRO! pois 'b' esta definida apenas no escopo do bloco, 
//diferente de var


// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
console.log(l, e, ...tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9}
// ou também const { idade, nome } = { nome: 'Ana', idade: 9}

console.log(i, nome)