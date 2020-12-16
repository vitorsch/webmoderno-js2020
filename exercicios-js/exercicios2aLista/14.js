function objetoParaArray ( obj = {}) {
    return Object.entries(obj)
}

const obj ={
    nome: "Maria",
    profissao: "Desenvolvedora"
}
console.log(objetoParaArray(obj))