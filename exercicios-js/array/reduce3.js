Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulator = valorInicial || this[0] 
    for (let i = indiceInicial; i < this.length; i++){
        acumulator = callback(acumulator, this[i], i, this)
    }
    return acumulator
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma,21))