
const salarioReal = (horasTrabalhadas, salarioPorHora) => `Salário igual a R$ ${(horasTrabalhadas
* salarioPorHora).toFixed(2).replace('.',',') }`
console.log(salarioReal(20.3, 38))

