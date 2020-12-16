{
    {
        {
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)
//no js o escopo nao interfere muito na visibilidade da variavel sera
//sendo visivel para o resto do código, mesmo dentro do bloco

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) ERRO!
//diferente para funcoes, a variavel fica apenas visivel
//dentro da funcao

