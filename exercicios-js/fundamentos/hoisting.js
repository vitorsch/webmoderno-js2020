console.log('a =', a)
var a = 2
console.log('a =', a)

/*'a' mesmo nao sendo declarado antes, o JS entende que ele existe
 *e imprime undefined na primeira linha, porém sem valor nenhum
 *o que equivaleria a escrever a seguinte sequência:
 var a
 console.log('a =', a)
 a = 2
 console.log('a =', a)
 assim ocorrendo o içamento , mesmo dentro de funcoes
*/




/* console.log('b =', b)  */
let b = 2
console.log('b =', b) 

//O efeito de içamento (Hoisting) nao ocorre com o let