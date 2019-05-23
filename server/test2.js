const pug = require('pug');
const path = require('path');

//
const compiledrenderFunction = pug.renderFile(path.resolve(__dirname,'../test/template7.pug'),{
    name: 'lili'
});

console.log(compiledrenderFunction)