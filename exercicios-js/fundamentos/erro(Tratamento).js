function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.mensage,
        date: new Date
    }

}

function imprimirNomeGritado(obj) {
    try{
    console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
       tratarErroELancar(e) 
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto '}
imprimirNomeGritado(obj)

//evitar mensagens de stack, de infraestrutura, entre outras coisas muito técnicas
//Ideal enviar na linguagem do usuário, com um hash que vc possa identificar o erro
