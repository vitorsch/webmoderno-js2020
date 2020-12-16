function Pessoa() {
    this.idade = 0

    const self = this
    //tambem funciona se substituir this por self
    setInterval (function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //dispara uma função a partir de um determinado intervalo
}//bind faz com que apenas chamando new Pessoa consiga ser chamada o this indicado
//a pessoa(func) desejada

new Pessoa 

//Importante para notar como utilizar o bind e também uma variante declarando uma variavel
// e apontando ela pra this.

