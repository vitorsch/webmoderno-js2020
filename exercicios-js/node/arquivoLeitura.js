const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono.... ( tomar cuidado para não atrapalhar o event loop)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})
// fim assincrono
const config = require('./arquivo.json')
console.log(config.db.host,config.db.port)//Note a inversão da ordem com o assincrono
//devido ao console.log executar antes do fs.readFile

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})

