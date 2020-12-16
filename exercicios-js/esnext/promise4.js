function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [min, max] = [max, min]

    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            console.timeLog('promise',tempo)
            resolve(aleatorio)
        }, tempo)
    })
}

//como gerar 10 numeros aleatorios ( ou varios)

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
        
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then( () => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })