const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas , funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//Bind é responsavel por amarrar o objeto a var desejada, assim quando essa
// chamar this que queira se referenciar a este objeto, o bind fara essa tarefa

