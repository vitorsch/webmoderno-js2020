const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) 
//retorna o valor da tabela unicode ASCII
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))// do 0,3[ ( aberto sem incluir)

console.log('Escola '.concat(escola.concat("!")))
//Pode-se usar operador + no lugar de concat
//porém tomar cuidado com os numeros
//pois string tem preferência ex. '3'+2 = 32
console.log(escola.replace(3, 'e'))
//substituir primeiro arg por /\w/g ( regex )

console.log('Ana,Maria,Pedro'.split(','))
//substituir arg do split por /'/ ( regex ) 
