function estaEntre( numero, min, max, inclusivo = false) {
    let maximum, minimum
    if( min > max) { 
        maximum = min
        minimum = max
    }
    if( inclusivo ) return maximum >= numero && minimum <= numero

    return maximum > numero && minimum < numero

}

console.log(estaEntre(3, 150, 3))
console.log(estaEntre(10, 100, 50))