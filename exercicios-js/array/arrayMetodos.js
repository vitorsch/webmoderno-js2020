const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa saiu ( ultimo elemento )
console.log(pilotos)

pilotos.push('Versatappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento

console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)


//splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')// a partir da posição 2 remove 0 elementos
//e adiciona 'Bottas' e 'Massa'
console.log(pilotos)

//remover
pilotos.splice(3, 1)//coitado do massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice 2 até o
// final
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a partir do indice 1 até 
//o indice 4, porém sem incluir o elemento do indice 4
console.log(algunsPilotos2)



