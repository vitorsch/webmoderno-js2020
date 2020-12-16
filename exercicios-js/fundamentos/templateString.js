const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)
//usando ` ` para realizar operações com quebra de linha 

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // ou LowerCase minus.
console.log(`Ei...${up('cuidado!')}`)
