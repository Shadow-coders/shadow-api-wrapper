const Base = require("./Base");

class Wrapper extends Base {
    constructor(ops) {
        super(ops)
        process.on('uncaughtException', err=> this.error(err))

}
error(err) {
if(!err instanceof Error) err = new Error(err)
err.name = 'ShadowWrapper'
this.emit('error', err)
}
async randomtext(length) {
  //  console.log(1)
   // console.log(this.type, this.key)
   if(!typeof length === 'number') return;
   return await this.getResponse('randomtext?count=' + length, { headers: {
    'Content-Type': 'application/json',
    'User-Agent': `ShadowApi/${require('../package.json').version} `,
    'Authorization': `${this.type} ${this.key}`
}})
}
}

module.exports = Wrapper;