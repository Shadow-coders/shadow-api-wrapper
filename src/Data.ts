
let fetch = require('node-fetch').Response
/**
 * @class 
 * @private
 */
class Data {
  exists: Boolean
  message: any
  code: Number
  url: String
  data: Array<Response>
  text: Object
  fetchedAt: Number
  error?: Boolean
  status?: Number
  err: any
    constructor(data: any, text: any) {
this.exists = true;
this.message = text?.message;
this.code = data.status
this.url = data.url
this.data = [data]
this.text = text;
this.fetchedAt = Date.now();
if(!data.ok) {
this.error = true
this.code = data.status
this.status = data.status

switch(data.status) {
    case 401:
    let err = new Error(this.message)
    err.message = this.message  
    this.err = err
break;
default:
    let error = new Error(this.message)
    error.message = this.message
    this.err = error
break;
    }
}
   
} 
/**
 * 
 * @returns {String}
 */
toString() {
    return this.message;
}
/**
 * 
 * @returns {Array}
 */
toArray() {
    return Object.entries(this)
}
/**
 * 
 * @returns {Object|Error}
 */
ToJSON() {
    return JSON.parse(JSON.stringify(this))
}
/**
 * 
 * @returns {Boolean}
 */
IsOk() {
    return this.status === 200
}
/**
 * 
 * @returns {Boolean}
 */
is404() {
    return this.status === 404
}
/**
 * 
 * @returns {Boolean}
 */
 is401() {
    return this.status === 401 || this.status === 403
 }
}
export default { Data: Data };