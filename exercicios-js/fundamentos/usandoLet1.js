var numero = 1
{
    let numero = 2
    console.log('dentro =',numero)
}
console.log('fora =', numero)
//let possui escopo de bloco, nao sendo visivel pro resto do código
//quando esta dentro de um bloco, dando preferência a usar
//a let de escopo menor ao chamar 'numero' em console.log

//variaveis com var tem escopo global e de funcao
//variaveis com let tem escopo global, de funcao e bloco