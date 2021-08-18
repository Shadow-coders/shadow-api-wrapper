let Base = require('./Base')
let Data = require('./Data')
let Wrapper = require('./main')
module.exports = {
    Base,
    Data,
    Wrapper,
}
let noop = () => {}
process.on('warning', noop)
// process.on('uncaughtException', noop)