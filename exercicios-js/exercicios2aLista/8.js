function multiplicar (num1, num2) {
    if( num2 <= 0 || num1 <= 0) {
        return 0
    }
    if( num1 >= num2) return num1 + multiplicar(num1, (num2 - 1))
    return num2 + multiplicar((num1 -1), num2) 
}
console.log(multiplicar(0, 0))