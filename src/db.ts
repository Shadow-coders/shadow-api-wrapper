import * as Data from './Data'
import { BaseOptions } from '../typings/index'
import  Base  from './Base'
import { DbOptions } from '../typings/index'
let base = `https://sus.neongamerbotqk.repl.co/db/v1/`
module.exports = class Db extends Base.Base {
  constructor(ops:DbOptions) {
      ops.database = true
        super(ops)
    }
   async get(key:any) {
if(!key) return this.misssingPram('key', key, 'string')
if(!(typeof key !== 'string')) return this.misssingPram('key', key, 'string')
let data = await this.fetch(base+`get?key=`+encodeURIComponent(key), {
    headers: { Authorization: `${this.keytype} ${this.key}`, useragent: `ShaodowApi/${require('../package.json')} (db)`,  'Content-type': 'application/json' },
    method: 'GET',
})
return new Data.default.Data(data, await data.json())
    }
  misssingPram(key:any, res:any, expecting:any) {
return `Missing pram ${key}` + (res && expecting ? `, expecting ${expecting} instead got ${typeof res}.` : `.`)
  }
}