const Base = require("./Base");

class Wrapper extends Base {
    constructor(ops) {
        super(ops)
        process.on('uncaughtException', err=> this.error('ee'))

}
error(err) {
if(!err instanceof Error) err = new Error(err)
err.name = 'ShadowWrapper'
this.emit('error', err)
}
}

module.exports = Wrapper;