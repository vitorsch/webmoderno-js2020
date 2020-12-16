function anoBissexto( valor ) {
    if ( valor % 400 == 0){
        return true
    } else if ( valor % 100 == 0) {
        return false
    } else if ( valor % 4 == 0) {
        return true
    }

    return false
}

console.log(anoBissexto(2200))
console.log(anoBissexto(2204))
console.log(anoBissexto(2400))
console.log(anoBissexto(2401))