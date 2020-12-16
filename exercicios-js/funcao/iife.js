// IIFE -> Immediately Invoked Function Expression

( function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

//Tudo que é definido ali dentro, foge do escopo global. É uma maneira
// de fugir do escopo global, para manipular modulos
