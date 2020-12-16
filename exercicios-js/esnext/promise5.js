function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('t')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esperado, ${err}`)
    )
    .catch(err => console.log(`ErroGeral: ${err}`))
    .then(() => console.log('Fim!'))

//Caso vc trate erro dentro de um then, o catch nao será chamado
//Ideal é deixar o catch para o final, pois não interfere no fluxo de chamdas do then
// E caso de algum erro ele será tratado apenas ao final