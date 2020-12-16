const prod1 = {} //forma literal de escrever um objeto
prod1.nome = 'Celular Ultra Mega' // cria dinamicamente um atributo
//nome dentro do objeto prod1
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaços

console.log(prod1.nome)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla:1,
        obj:{
            blabla:2
        }
    }
}
//transf prod2 em JSON

'{"nome": "Camisa Polo", "preco": 79.90}' //<-- JSON
//muito utilizado para trocar dados entre sistema, não é a mesma coisa que obj literal

console.log(prod2)

/* quando fazendo manipulação de funções, objetos etc, é feita
   por referência de local da memória em que estes se encontram
   ex.:
   obj a = {}
   b = a

   'b' irá apontar para posição de memória(referência) onde está
   as informações de 'a' ( parecido com manipulação de ponteiros
    em c/c++)

   Diferente são os valores primitivos, que é feita transferência
   de valor, e não da referência. 
   ex.:
   let b = 5
   a = b

   'a' se tornará o valor 5.*/