// Q1
/* function calculo(num1, num2){
    console.log(`Soma: ${num1 + num2}`)
    console.log(`Sub : ${num1 - num2}`)
    console.log(`Mult: ${num1 * num2}`)
    console.log(`Div : ${num1 / num2}`)
}

calculo(2,2) */



// Q2
/* function triangulos(lado1, lado2, lado3) {

    if( lado1 == lado2 && lado2 == lado3 ){
        console.log("Equilatero")
    } else if( lado1 == lado2 || lado2 == lado3 || lado1 == lado3 ){
        console.log("Isósceles")
    } else {
        console.log("Escaleno")
    }
}

triangulos(1,1,1)
triangulos(1,2,2)
triangulos(1,1,2)
triangulos(1,2,1)
triangulos(1,2,3) */

// Q3
/* function elevado(base, expoente) {

    console.log(Math.pow(base, expoente))
}

elevado(2, 3) */

// Q4 

/* function divideResto(dividendo, divisor) {

    console.log(`Resultado: ${Math.floor(dividendo/divisor)}`)
    console.log(`Resto: ${(dividendo % divisor)}`)
}

divideResto(6.5, 2) */

// Q5 console.log((10.345).toFixed(2))

/* function retornaDois(num) {

    return `R$0,${100*(num).toFixed(2)}`
}

console.log(retornaDois(0.30000000000000004)) */

// Q06

/* function jurosSimples (capital, taxa, tempo) {
    let montante = capital;
    for(let i = 0; i < tempo ; i++){
        montante = montante + capital * taxa
    }
    return montante;
}

console.log(jurosSimples(1000, 0.1, 2))

function jurosCompostos (capital, taxa, tempo) {
    let montante = capital;
    for(let i = 0; i < tempo; i++) {
        montante = montante + montante * taxa
    }
    return montante
}

console.log(jurosCompostos(2000, 0.2, 6)) */

// Q07

/* function bhaskara (ax2, bx, c) {

    delta = Math.pow(bx, 2) - 4 * ax2 * c
    //console.log(`${delta}`)
    if ( delta < 0 ){
        return "Delta é negativo"
    } else {
        raiz1 = (- bx - Math.pow(delta, 0.5) ) / ( 2 * ax2)
        raiz2 = (- bx + Math.pow(delta, 0.5) ) / ( 2 * ax2)
        return [raiz1, raiz2]
    }
    
}

console.log(bhaskara(3, -5, 1))
*/

// Q08

/* let lista = "23 4 24 34 2 45"

function basquete (pontuacoes) {
    jogos = pontuacoes.split(" ")
    for (let i in jogos) {
        jogos[i] = parseInt(jogos[i], 10)
    }
    console.log(jogos)
    melhorJogo = jogos[0]
    recordesBatidos = 0
    piorJogo = jogos[0]
    nPiorJogo = 0

    for(let i = 0 ; i < jogos.length ; i++) {
        if ( jogos[i] > melhorJogo) {  
            recordesBatidos++
            melhorJogo = jogos[i]
        }

        if ( jogos[i] < piorJogo ) {
            nPiorJogo = i  
            piorJogo = jogos[i]
        }
    }

    return [recordesBatidos, nPiorJogo + 1]


}


console.log(basquete(lista)) */


// Q09

/* function notas (nota) {

    if ( nota < 38) {
        return nota;
    } else if ( nota % 5 >= 3) {

        nota = nota + ( 5 - (nota % 5))
        return nota
    } else {
        return nota
    }
}

console.log(notas(25))
console.log(notas(38))
console.log(notas(62))
console.log(notas(84)) */

// Q10

/* function multiplo3 (numero) {
    return numero % 3 == 0
}

console.log(multiplo3(18)) */

// Q11

/* function bissexto (ano) {

    
    if ( ano % 400 == 0) {
        return true
    } else if ( ano % 100 == 0 ) {
        return false
    } else if ( ano % 4 == 0) {
        return true
    } 

    return false  
}

console.log(bissexto(16))
console.log(bissexto(200))
console.log(bissexto(800))
console.log(bissexto(600))
console.log(bissexto(300)) */

// Q12

/* function fatorial ( numero ) {
    let fat = numero
    while(numero > 1 ) {
        numero--
        fat = fat*numero
    }   
    
    return fat
}
//Também funciona recursivamente
console.log(fatorial(4))
console.log(fatorial(5)) 
console.log(fatorial(2)) */

// Q13

/* function diautil (dia) {
    if((dia >= 1) && (dia <= 31)) {
        switch(dia){
            case 1: case 7: case 8: case 14: case 15: case 21: case 22: case 28: case 29:
                return "Fim de semana"
            default:
                return "Dia útil"
        }
    }

    return "Dia inválido"
}

console.log(diautil(1))
console.log(diautil(22))
console.log(diautil(13))
console.log(diautil(-1))
console.log(diautil(32)) */

// Q14

/* function frutas ( fruta ) {

    switch (fruta) {
        case "maçã":
            return "Não vendemos essa fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui esta, são 3 reais o kilo"
        default:
            return "Erro, fruta inválida"
    }
}

console.log(frutas ("maçã"))
console.log(frutas ("kiwi"))
console.log(frutas ("melancia"))
console.log(frutas ("goiaba")) */

// Q15

/* function automoveis (auto) {

    switch(auto) {
        case "hatch":
            return "Compra efetuada com sucesso"

        case "sedans": case "motocicletas": case "caminhao":
            return "Tem certeza que não prefere este modelo?"

        default:
            return "Não trabalhamos com este tipo de automovel aqui"
    }
}

console.log(automoveis("hatch"))
console.log(automoveis("sedans"))
console.log(automoveis("hat"))
console.log(automoveis("motocicletas")) */

// Q16
/* 
function basicaO (x, op, y) {
    switch (op) {

        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        

        default:
            return "Operador Inválido!"

    }
}

console.log(basicaO(2,'+', 2))
console.log(basicaO(2,'-', 2))
console.log(basicaO(2,'*', 2))
console.log(basicaO(2,'/', 2))
console.log(basicaO(2,'^', 2)) */


// Q17

/* function planoTrabalho (plano, salario) {

    switch (plano) {

        case 'A':
            console.log( salario * 1.1 )
            break
        case 'B':
            console.log( salario * 1.15 )
            break    
        case 'C':
            console.log( salario * 1.2 )
            break
        default: 
            console.log( "Plano Inválido" )
        
    }
}
planoTrabalho('A', 1000)
planoTrabalho('B', 2000)
planoTrabalho("asew", 2000)
planoTrabalho('C', 4000) */

// Q18
/* 
function porExtenso(numero) {

    switch (numero) {
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Três"
        case 4:
            return "Quatro"    
        case 5:
            return "Cinco"    
        case 6:
            return "Seis"    
        case 7:
            return "Sete"    
        case 8:
            return "Oito"    
        case 9:
            return "Nove"    
        case 10:
            return "Dez"    
        default:
            return "Número fora do intervalo"
        
    }
}

console.log(porExtenso(2))
console.log(porExtenso(22))
console.log(porExtenso(4))
console.log(porExtenso(6))
console.log(porExtenso(8)) */

// Q19

/* function pedidoLanche(cod, qtd) {

    switch (cod) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8

        default:
            return "Produto não existe"
    }
}

console.log(pedidoLanche(100,2))
console.log(pedidoLanche(200,2))
console.log(pedidoLanche(500,2))
console.log(pedidoLanche(2200,2)) */

// Q20
/* 
function cedulas(valor) {

    let notasutilizadas = ""

    if ( ( valor / 100 ) >= 1) {
        notasutilizadas = notasutilizadas + `${Math.floor(valor/100)} nota(s) de R$100. `
        valor = valor - Math.floor(valor/100) * 100
    }
    
    if ( (valor / 50 ) >= 1) {
        notasutilizadas = notasutilizadas + `${Math.floor(valor/50)} nota(s) de R$50. `
        valor = valor - Math.floor(valor/50) * 50
    }  
    
    if ( (valor / 10) >= 1) {
        notasutilizadas = notasutilizadas + `${Math.floor(valor/10)} nota(s) de R$10. `
        valor = valor - Math.floor(valor/10) * 10
    }
    if( (valor / 5 ) >= 1) {
        notasutilizadas = notasutilizadas + `${Math.floor(valor/5)} nota(s) de R$5. `
        valor = valor - Math.floor(valor/5) * 5
    } 
    if (valor > 0) {
        notasutilizadas = notasutilizadas + `${Math.floor(valor/1)} nota(s) de R$1. `
    }

    return notasutilizadas

}

console.log(cedulas(18))
console.log(cedulas(20))
console.log(cedulas(56))
console.log(cedulas(166)) */

// Q21

/* function planoSaude(idade) {

    if( idade < 10) {
        return 100 + 80
    } else if ( idade <= 30 ) {
        return 100 + 50
    } else if ( idade <= 60) {
        return 100 + 95
    } else {
        return 100 + 130
    }
}

console.log(planoSaude(9))
console.log(planoSaude(25))
console.log(planoSaude(45))
console.log(planoSaude(60))
console.log(planoSaude(65)) */

// Q22


/* function anuidade(mes, valor) {

    let montante = valor;
    for(let i = 0; i < (mes - 1); i++) {
        montante = montante + montante * 0.05
    }
    return montante

}
console.log(anuidade(1, 1000))
console.log(anuidade(2, 1000))
console.log(anuidade(3, 1000))
console.log(anuidade(4, 1000))
console.log(anuidade(2, 2000)) */

// Q23
/* 
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
//sacada dessa linha de código 
// notas.sort((a,b) => a < b ? 1 : -1)
// caso 'a' < 'b' retorna valor positivo tras 'b' pra indice do array menor  que 'a'
// caso 'a' > 'b' retorna valor negativo, tras 'a' para indice do array menor que 'b'
*/


/* // Q24
function hello11X(){

    let hel = 10
    while (hel >= 0) {
        console.log(hel+1,"Hello World!")
        hel--
    }
}

hello11X() */

// Q26

/* function pares100(){

    let num = 100
    while(num >= 1) {
        if( num % 2 == 0) {
            console.log(`Par Encontrado: ${num}`)
        }
        num--
    }

}
pares100() */


// Q27
/* 
function crescimento ( alt1, taxa1, alt2, taxa2 ) {

    if ( alt1 >= alt2) {
        if ( taxa1 >= taxa2) {
            return "A criança 1 sempre será maior ou igual"
        }

        let anosAteUltrapassar = 0
        while(alt1 >= alt2) {
            anosAteUltrapassar++
            alt1 += taxa1
            alt2 += taxa2
        }
        return `${anosAteUltrapassar} anos para crianca 2 ultrapassar a 1`

    }
    if ( alt2 >= alt1) {
        if ( taxa2 >= taxa1) {
            return "A criança 2 sempre será maior ou igual"
        }

        let anosAteUltrapassar = 0
        while(alt2 >= alt1) {
            anosAteUltrapassar++
            alt1 += taxa1
            alt2 += taxa2
        }
        return `${anosAteUltrapassar} anos para crianca 1 ultrapassar a 2`

    }
}

console.log(crescimento(100, 10, 120, 20))
console.log(crescimento(120, 10, 100, 10))
console.log(crescimento(120, 20, 130, 10))
console.log(crescimento(100, 10, 120, 20))
console.log(crescimento(150, 5, 120, 10)) */

// Q28
/* function parOuImpar(lista) {
    let par = 0
    let impar = 0

    for (let i in lista ){
        if ( lista[i] % 2 == 0 ) {
            par++
        } else {
            impar++
        }
    }
    console.log(`Total de pares: ${par}\nTotal de impares: ${impar}`)
}

parOuImpar([2, 5, 6, 7, 8, 14, 15, 17, 19])
 */

// Q29

/* function qtdNoIntervalo(vetorNumeros) {
    qtd = 0
    for (let i in vetorNumeros) {
        if ( (vetorNumeros[i] >= 10) && (vetorNumeros[i] <= 20)) {
            qtd++
        }
    }
    console.log(`${qtd} estão no intervalo\n${vetorNumeros.length - qtd} estão fora`)
}

let vetorN = [2, 12, 18, 20, 34, 25, 44]
qtdNoIntervalo(vetorN) */

// Q30

/* function maiorMenor( vetorNumeros ) {
    let maior = vetorNumeros[0]
    let menor = vetorNumeros[0]
    
    for (let i in vetorNumeros) {

        if ( vetorNumeros[i] > maior ) {
            maior = vetorNumeros[i]
        }
        if ( vetorNumeros[i] < menor ) {
            menor = vetorNumeros[i]
        }
    }
    console.log(`Maior: ${maior}\nMenor: ${menor}`)

}

let vetorMaiorMenor = [2, 12, 18, 20, 34, 25, 44]
maiorMenor(vetorMaiorMenor) */

// Q31
/* function negativos ( vetorNumeros ) {

    let qtdNeg = 0

    for (let i in vetorNumeros) {
        if ( vetorNumeros[i] < 0 ) {
            qtdNeg++
        }
    }

    console.log(`${qtdNeg} numeros negativos`)
}

let vetorNegativos = [0, -12, 18, -20, 34, -25, 44]
negativos(vetorNegativos) */

// Q32

/* function medArit( vetorNumeros ) {
    total = 0

    for ( let i in vetorNumeros ) {
        total += vetorNumeros[i]
    }
    console.log(`${ ( total / vetorNumeros.length ) } de média`)
}
let vetorMedArit = [2, 12, 18, 20, 34, 25, 44]
medArit(vetorMedArit) */

// Q33 

/* let vetorInteiro = [1, 2, 3, 4]
let vetorString = [ "ola", "voce", "quer", "programar"]
let vetorDouble = [ 3.14, 6.28, 9.42, 12.56]

let novo = []
novo = vetorInteiro.concat(vetorString)
novo = novo.concat(vetorDouble) 
console.log(novo) */


// Q34

/* function comparaStrings(str1, str2) {
    let str1Alt = str1.toLowerCase()
    let str2Alt = str2.toLowerCase()

    for ( let i in str2Alt) {

        if( str1Alt.indexOf( str2Alt[i] ) == -1 ) {
            return false
        }
    }
    return true
}

let palavra1 = "socorram"
let palavra2 = "marrocos"
console.log(comparaStrings(palavra1, palavra2)) */

//Q 35
/* 
let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]
function adicionaVetor( vetor1, vetor2){
    for (let i in vetor2) {
        vetor1.push(vetor2[i])
    }
    console.log(vetor1,vetor2)
}
adicionaVetor(vetorPilha, vetorAdiciona)
*/


// Q36

/* function multiVetor( vet, numero) {

    let vetor = []

    for (let i in vet) {
        vetor.push(vet[i] * numero )
    }

    return vetor
}

function cincoMult ( vet, numero) {
    let vetor = []

    if ( vet[0] > 5 ) {

        for (let i in vet) {
            vetor.push(vet[i] * numero )
        }
    } else {
        vetor = vet
    }
    
    return vetor
}

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 2, 2, 10, 4]

console.log(multiVetor(vetor1, 2))
console.log(cincoMult(vetor2, 2))
console.log(cincoMult(vetor1, 2)) */

// Q37

/* function pA ( n, a1, r ) {
    console.log("Progressão Aritmética: ")
    let soma = a1
    let a = a1
    console.log(`${a1} `)
    for ( let i = 0 ; i < n ; i++) {
        a = a + r
        console.log(`${a} `)
        soma += a
    }
    console.log(`\nSoma ${soma}`)
}

function pG ( n, a1, r ) {
    console.log("Progressão Geométrica: ")
    let soma = a1
    let a = a1
    for ( let i = 0 ; i < n ; i++) {

        a = a1 * Math.pow(r, i) 
        console.log(`${a} `)
        soma += a
    }
    console.log(`\nSoma ${soma}`)
}


pA(5, 2, 2)
pG(5, 2, 2) */

// Q38

/* function impares(inicio, fim) {
    while ( inicio != fim ) {
        if ( inicio < fim ) {
            if (inicio % 2 != 0) {
                console.log((inicio))
            }
            inicio++
        } else if (fim < inicio) {

            if (fim % 2 != 0) {
                console.log(fim)
                
            }
            fim++

        }
    }
}

impares(100, 0)
impares(0, 100) */

// Q39

/* function trocaSemAux( vet1, vet2 ) {

    for ( let i in vet1 ) {
        vet1[i] = vet1[i] + vet2[i]
        vet2[i] = vet1[i] - vet2[i]
        vet1[i] = vet1[i] - vet2[i]
    }

    console.log("Novo vetor A:" + vet1)
    console.log("Novo vetor B:" + vet2)
}

let vetTroca1 = [1, 2, 3]
let vetTroca2 = [4, 5, 6]

trocaSemAux(vetTroca1, vetTroca2) */

// Q40

function notasConceito ( notas ) {

    for ( let i = 0; i < notas.length; i++) {
        if ( notas[i] <= 4.9) {
            console.log(`${ i + 1}ª nota : D`)
        } else if ( notas[i] <= 6.9) {
            console.log(`${ i + 1}ª nota : C`)
        } else if ( notas[i] <= 8.9) {
            console.log(`${ i + 1}ª nota : B`)
        } else if ( notas[i] <= 10) {
            console.log(`${ i + 1}ª nota : A`)
        }
    }
}

let vetorConceito = [4.8, 4.4, 5.6, 7.5, 9.5]
notasConceito(vetorConceito)