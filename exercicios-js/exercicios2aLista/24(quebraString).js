function contaCaractere ( ch, frase ) {
    let contador = 0
    for ( let i in frase) {
        if( frase[i] == ch ) contador++
    }
    return contador
}

console.log(contaCaractere("A", "A sorte favorece os audazes"))

// Ou ainda

function contaCaractere2 (ch, frase) {
    return [...frase].filter( caractere => caractere == ch ).length
}

console.log(contaCaractere2 ("a", "A sorte favorece os audazes"))

console.log("A sorte favorece os audazes",[..."A sorte favorece os audazes"])

// [...string] = quebra string em carecteres e retorna uma array com os caracteres