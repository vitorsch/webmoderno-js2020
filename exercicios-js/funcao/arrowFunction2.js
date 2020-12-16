function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}//ao usar arrow function o this nao varia, independente de onde ou quem esteja chamando

new Pessoa

