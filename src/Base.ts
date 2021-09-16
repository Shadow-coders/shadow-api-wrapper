import { EventEmitter } from 'events'
import * as fetch from 'node-fetch'
import Data from './Data'
import { BaseOptions, ResponseParams } from '../typings/index'
let base = `https://sus.neongamerbotqk.repl.co/api/v1/`
/**
 * @class 
 */
class Base extends EventEmitter {
keytype: String
fetch: any
key: String
ops: Object
database: any
    public constructor(ops: BaseOptions) {
   super() 
this.ops = ops;
this.keytype =  ops?.keytype ? ops.keytype : 'Bearer'
    this.fetch =  fetch;
    this.key = ops?.key
}
error(err:any) {
    if(!(err instanceof Error)) err = new Error(err)
    err.name = 'ShadowWrapper'
    this.emit('error', err)
    }
toString() {
    return __dirname
}

async getResponse(url:String, prams: ResponseParams) {
   // console.log(2)
    if(!(typeof url === 'string')) return this.error('INVALID_URL') 
  if(!(typeof prams === 'object')){
      prams = {}
      prams.method = 'GET'
      prams.headers = {
        'Content-Type': 'application/json',
        'User-Agent': `ShadowApi/${require('../package.json').version} (api/nodejs)`,
        'Authorization': `${this.keytype} ${this.key}`
    }

    } 

//   if(!(prams.headers['Content-Type'])) prams.headers['Content-Type'] =  'application/json' //this.getHeaders(url)['Content-Type']
//   if(!(prams.headers['Authorization'])) prams.headers['Authorization'] = `${this.type} ${this.key}`
  url = `${this.database ? `https://sus.neongamerbotqk.repl.co/db/v1/` : base}${url}`
 // console.log(url)
let res = await this.fetch(url, prams)
return new Data.Data(res, await res.json())
}
getHeaders(endpoint:String) {
    return {
        method: 'GET',
        headers: {
        'Content-Type': endpoint !==  '/nono' ? 'application/json' : undefined,
       'User-Agent': `ShadowApi/${require('../package.json').version} `,
        'Authorization': `${this.keytype} ${this.key}`
    },
}
}
}
export default { 
    Base 
}