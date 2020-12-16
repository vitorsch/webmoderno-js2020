const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5){
        break
    } 
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Break apenas interrompe a repetição (for) por completo
//Continue pula a sequencia de execuções do laço atual

externo: for (a in nums) {
    for (b in nums) {
        if( a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
//Break com rotulo, age na repetição do rotulo externa