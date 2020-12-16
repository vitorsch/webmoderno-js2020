function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout( () => resolve(), tempo)
    })
}
//Para usar o await, precisamos criar uma função do tipo async

/* esperarPor(4000)
    .then(() => console.log('Executando promise...1'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...2'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...3')) 
*/

function retornarValor() {
    return new Promise( resolve => {
        setTimeout(() => resolve (10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}
//dentro de uma função async devemos usar o await caso queiramos esperar pelo
//retorno de outras funções async, pois elas devolvem uma promise caso 
//não usemos o marcador 'await'
async function executar () {

    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

//Quando a função é marcada com async ela devolve uma promise, não podemos fazer 
// const v = executar(), a solulção seria com o then

//executar().then(console.log)
//ou
executarDeVerdade()
