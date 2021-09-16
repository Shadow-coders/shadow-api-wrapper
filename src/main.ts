import * as Base from './Base'
import { BaseOptions } from '../typings/index'
class Wrapper extends Base.default.Base {
    constructor(ops: BaseOptions) {
        super(ops)
        process.on('uncaughtException', err=> this.error(err))

}
error(err:any) {
if(!(err instanceof Error)) err = new Error(err)
err.name = 'ShadowWrapper'
this.emit('error', err)
}
async randomtext(length: Number) {
  //  console.log(1)
   // console.log(this.type, this.key)
   if(!(typeof length === 'number')) return;
   return await this.getResponse('randomtext?count=' + length, { headers: {
    'Content-Type': 'application/json',
    'User-Agent': `ShadowApi/${require('../package.json').version} `,
    'Authorization': `${this.keytype} ${this.key}`
}})
}
}

module.exports = Wrapper;