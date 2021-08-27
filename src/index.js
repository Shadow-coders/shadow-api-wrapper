let Base = require('./Base')
let Data = require('./Data')
let Wrapper = require('./main')
let Db = require('./db')
let run = true
if(parseInt(process.version.slice(1,3)) < 14) {
    process.emitWarning('Node version 14 is required to run this program - ShadowapiWrapper')
    module.exports = { closed: new Error('Node version 14 is required to run this program')}
    run = false
}
if(run) {
    module.exports = {
        Base,
        Data,
        Wrapper,
        Db,
    }
    
}
let noop = () => {}
let sleep = (time) => { return new Promise((res) => {
    setTimeout(() => res(true),time)
})}
sleep(5000).then(noop)
process.on('warning', console.warn)
// process.on('uncaughtException', noop)