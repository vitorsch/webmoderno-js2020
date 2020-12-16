console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Todos tem atributo .prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]    
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
    
}

console.log('Escola Cod3r'.reverse()) // CUIDADO ao criar novas funcoes que 
// sobreescrevam as funcoes padroes ex. toString, pode gerar diversos efeitos 
// colaterais