
function removeVogais (string) {
    return [...string].filter( ch => 
        ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u' ).toString().replace(",", "")
       
}

console.log(removeVogais("Fundamentos"))

function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    return frase
}

console.log(removerVogais("Fundamentos"))