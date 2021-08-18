for(const file of require('fs').readdirSync(__dirname).filter(f => f !== 'index.js')) {
    module.exports[file] = require(`./${file}`)
}