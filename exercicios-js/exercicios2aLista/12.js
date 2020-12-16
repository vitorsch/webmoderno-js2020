//Minha solução
function removerPropriedade (dados = {}, propriedade) {
    const newObj = {}
    for ( let i = 0; i < Object.keys(dados).length; i++){
        newObj[Object.keys(obj)[i]] = dados[Object.keys(obj)[i]]
    }
    delete newObj[propriedade]
    return newObj
}
const obj = { a: 2, b: 3}
console.log(Object.keys(obj).length)
console.log(removerPropriedade(obj, "a"))
console.log(Object.is(removerPropriedade(obj, "a"), obj))

function removerPropriedade2(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    return copia
}
//Solução 1
console.log(removerPropriedade2(obj, "a"))
console.log(Object.is(removerPropriedade(obj, "a"), obj))

//Solução 2
function removerPropriedade3(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}