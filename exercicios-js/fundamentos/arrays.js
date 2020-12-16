//array é heterogeneo, aceita multiplos valores
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores, /*"\t",*/valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

//indicado trabalhar com arrays homogeneos ( com mesmo tipo de dados)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)