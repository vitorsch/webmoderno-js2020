
const apenasPreco = produto => produto.preco
const somaPrecos = (acumulator, atual) => acumulator + atual

function despesasTotais(dados) {
    return dados.map(apenasPreco).reduce(somaPrecos)
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]))