const Data = require('./Data')

let base = `https://sus.neongamerbotqk.repl.co/db/v1/`
module.exports = class Db extends require('./Base') {
    constructor(ops) {
        ops.database = true
        super(ops)
    }
    get(key) {
if(!key) return this.misssingPram('key')
if(!typeof key !== 'string') return this.misssingPram('key', key, 'string')
let data = await this.fetch(base+`get?key=`+encodeURIComponent(key), {
    headers: { Authorization: `${this.type} ${this.key}`, useragent: `ShaodowApi/${require('../package.json')} (db)`,  'Content-type': 'application/json' },
    method: 'GET',
})
return new Data(data, await data.json(), )
    }
  misssingPram(key, res, expecting) {
return `Missing pram ${key}` + (res && expecting ? `, expecting ${expecting} instead got ${typeof res}.` : `.`)
  }
}