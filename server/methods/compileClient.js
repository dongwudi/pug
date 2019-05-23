var pug = require('pug');

var fn = pug.compileClient('p this is  pug #{name}',{
    name: 'aa'
});

console.log(fn)