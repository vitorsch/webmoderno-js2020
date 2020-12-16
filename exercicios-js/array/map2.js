const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Elementos do tipos JSON

//Retornar um array apenas com os preços

//Minha solução sem map
resultado = []
carrinho.forEach( function(nome, i, array){
    resultado.push(JSON.parse(array[i])['preco'])
})

console.log(resultado)

//Solução com map

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)