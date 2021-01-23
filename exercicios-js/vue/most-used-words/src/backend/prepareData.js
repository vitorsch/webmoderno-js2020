module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTagsAndEmptySpaces)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('"',''))

            resolver(words)
        } catch(e) {
            reject(e)
        }
    })
}

function filterValidRow(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim() // explicacao aula 431. minuto 3:
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '')
const removeTagsAndEmptySpaces = row => row.replace(/(<[^>]+)/g,'').trim()
const mergeRows = (fullText, row) => `${fullText} ${row}`