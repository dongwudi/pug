const pug = require('pug');
const path = require('path');

const compiledFunction = pug.compileFileClient(path.resolve(__dirname,'../../test/template.pug'));


console.log(compiledFunction)

