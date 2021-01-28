const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
// const { salvar, obter } = require('./api/usuario')
const usuarioApi = require('./api/usuario')
const produto = require('./api/produto')
const produtoApi = require('./api/produto')

produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

// app.post('/usuario', salvar)
// app.get('/usuario', obter)

// 'use' é aplicado tanto para 'post' quanto 'get'

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao('Vitor'))

app.use('/opa', (req, res, next) => {
    console.log('Antes')
    next()
})

// Query
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/clientes/:id', (req,res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo', (req, res) => {
    /* let corpo =''
    req.on('data', function(parte) {
        corpo += parte
    })

    req.on('end', function () {
        res.send(corpo)
    }) */

    // res.send(req.body.nome)
    // res.send(JSON.stringify(req.body))
    res.send(req.body)
})


app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 34, name: 'Bia', position: 2 },
            { id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })// metodo middleware
    next()

    // res.json({
    //     name: 'iPad 32GB',
    //     price: 12323,
    //     discount: 0.12
    // })
    // res.send('Estou <b>bem</b>')
})

app.use('/opa', (req, res, next) => {
    console.log('Depois')
    next()
})

app.listen(3000, () => {
    console.log('Backend executando...')
})
