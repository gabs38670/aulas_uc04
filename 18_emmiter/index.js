const eventEmitter = require('events')

const eventEmitter = new eventEmitter()

eventEmitter.on('start',() =>{
    console.log('Durante')
})

console.log('Antes')
eventEmitter.emit('start')
console.log('Depois')
 //ERROR