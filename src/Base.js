
let events = require('events').EventEmitter
let base = `https://sus.neongamerbotqk.repl.co/api/v1/`
let Data = require('./Data')
/**
 * @class 
 * @extends {events}
 * @public 
 */
class Base extends events {
constructor(ops) {
   super()
    if(ops) {
        Object.entries(ops).forEach(re => {
        re = { key: re[0], data: re[1] }
        this[re.key] = re.data
    })
}
    this.ops = ops;
    this.type =  ops?.keytype ? ops.keytype : 'Bearer'
    this.fetch = require('node-fetch')
    this.key = ops?.key
}
get toString() {
    return __dirname
}
async getResponse(url, prams) {
   // console.log(2)
    if(!typeof url === 'string' && !url.toString) return this.error('INVALID_URL') 
  if(!typeof prams === 'object'){
      prams = {}
      prams.method = 'GET'
      prams.headers = {
        'Content-Type': 'application/json',
        'User-Agent': `ShadowApi/${require('../package.json').version} `,
        'Authorization': `${this.type} ${this.key}`
    }
    } 

  if(!prams.headers['Content-Type']) prams.headers['Content-Type'] =  'application/json' //this.getHeaders(url)['Content-Type']
  if(!prams.headers['Authorization']) prams.headers['Authorization'] = `${this.type} ${this.key}`
  url = `${base}${url}`
 // console.log(url)
let res = await this.fetch(url, prams)
return new Data(res, await res.json())
}
getHeaders(endpoint) {
    return {
        method: 'GET',
        headers: {
        'Content-Type': endpoint !==  '/nono' ? 'application/json' : undefined,
       'User-Agent': `ShadowApi/${require('../package.json').version} `,
        'Authorization': `${this.type} ${this.key}`
    },
}
}
}
module.exports = Base;