
let fetch = require('node-fetch').Response
/**
 * @class 
 * @private
 */
class Data {
  /**
   * @constructor
   * @public {}
   * @param {Fetch} data 
   */
    constructor(data) {
if(!typeof data === 'object' && typeof data !== 'string') {
 data = JSON.parse(JSON.stringify(data))
} else {
    throw 'DATA_INVALID got ' + typeof data
}
data.text().then(t => {
    try { 
       this.message = JSON.parse(t)
    } catch (e) {
        this.message = t
    }
})
if(!data.ok) {
this.error = true
this.code = data.status
this.status = data.status
switch(data.status) {
    case 401:
    let err = new Error(typeof this.message !== 'string' ? this.message.message : this.message)
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
    return this.message?.message;
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
module.exports = Data;