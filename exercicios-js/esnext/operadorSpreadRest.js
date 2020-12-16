// operador ... rest (juntar)/spread(espalhar)
// usar rest com parametro de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.99 }
const clone = { ativo: true, ...funcionario}//espalha os atributos de funcionario
//dentro do clone

console.log(clone)
funcionario.nome = 'Joao'
console.log(clone,funcionario)

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)