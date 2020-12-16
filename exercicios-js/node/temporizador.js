const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 1', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// (*/5 * 23 * * 1)
// '*/5' de 5 em 5 sec
// '*' qualquer minuto
// '23' horas
// '*' dia do mês
// '*' mês
// '1' dia da semana [0,6] a partir do domingo

setTimeout( function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)
// setImmediate
// setInterval
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 23
regra.second = "*/30"

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})