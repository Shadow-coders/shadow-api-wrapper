
let events = require('events').EventEmitter
/**
 * @class 
 * @extends {events}
 * @public 
 */
class Base extends events {
constructor(ops) {
   super()
    Object.entries(ops).forEach(re => {
        re = { key: re[0], data: re[1] }
        this[re.key] = re.data
    })
    this.ops = ops;
    this.type =  ops.keytype ? ops.keytype : 'Bearer'
    this.fetch = requore('node-fetch')
}
get toString() {
    return __dirname
}
async getResponse(url, prams) {
if(!typeof url === 'string' && !url.toString) return this.error('INVALID_URL') 
  if(!typeof prams === 'object' && !prams.toJSON) prams = this.getHeaders(url)
  if(!prams['Content-Type']) prams['Content-Type'] = this.getHeaders(url)['Content-Type']
let res = await this.fetch(`${base}/${url}`, prams)
return new Data(res)
}
getHeaders(endpoint) {
    return {
        'Content-Type': endpoint !==  '/nono' ? 'application/json' : undefined,
        'User-Agent': `ShadowApi/${require('../package.json').version} `,
        'Authorization': `${this.type} ${this.key}`
    }
}
}
module.exports = Base;