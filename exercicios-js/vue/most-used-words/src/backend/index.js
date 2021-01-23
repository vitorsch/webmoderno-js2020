const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
        .then( rows => prepareData(rows))
        .then( words => groupWords(words))
        .then( groupedWords => {
            console.log(groupedWords)
            event.reply('process-subtitles', groupedWords)
        })
        .catch(e => console.log(e))

})