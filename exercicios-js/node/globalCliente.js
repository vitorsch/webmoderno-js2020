require('./global')
console.log(global.MinhaApp.saudacao())
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita'//Cuidado ao tocar em algo de escopo global!
console.log(MinhaApp.nome)