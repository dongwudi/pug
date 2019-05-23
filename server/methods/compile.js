var pug = require('pug');

var fn = pug.compile('p this is  pug #{name}');
console.log(fn())
var html = fn({
    name: 'compile'
});
console.log(html)