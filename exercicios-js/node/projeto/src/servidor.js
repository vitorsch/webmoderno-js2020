const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))
//se os dados estiverem nesse formato, ira executar um parser e transformar no objeto desejado


/* app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
}) */ // testando funcionamento de middleware 

/* app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 })//vai converter para JSON automaticamente
})
 */

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())//vai converter para JSON automaticamente
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto( {
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Gera um JSON pra ir pra web
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto( {
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Gera um JSON pra ir pra web
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Gera um JSON pra ir pra web
})


app.listen(3003, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

