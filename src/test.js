let {Wrapper} = require('./index');
let test = new Wrapper({ key: process.env.key, })

test.randomtext(10).then(console.log);




