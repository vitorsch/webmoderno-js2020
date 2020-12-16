//const { reject } = require("lodash")

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [min, max] = [max, min]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegoSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            let num_gerado = await gerarNumerosEntre(1, 60, numeros)
            numeros.push(num_gerado)
        }
        return numeros
    } catch (e) {
        if (tentativas > 100) {
            return `Não deu certo! ${e}`
        } else {
            gerarMegoSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegoSena(25)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))


