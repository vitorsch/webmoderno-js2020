const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'Não foi possível conectar ao MongoDB!'
        console.log(msg.bgRed)
    })