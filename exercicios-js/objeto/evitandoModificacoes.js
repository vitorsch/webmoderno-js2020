// Object.preventExtensions
// evita a adição de novos atributos do seu objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borraca escolar branca' // acaba por nao fazer nada essa linha
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)// nao dar pra adicionar ou remover elementos, porém pode
//editar os valores
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// OBject.freeze = selado + valores constantes