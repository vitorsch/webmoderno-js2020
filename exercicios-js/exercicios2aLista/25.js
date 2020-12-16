function buscaPalavraParecidas( palavra, arrayDePalavras) {
    const arrayRetorno = []
    for ( let i in arrayDePalavras){
        if (arrayDePalavras[i].includes(palavra) ) arrayRetorno.push(arrayDePalavras[i])
    }

    return arrayRetorno
}

console.log(buscaPalavraParecidas("pro", ["programação", "mobile", "profissional","approach"]))

//Outra resolução
function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}