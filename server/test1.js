const pug = require('pug');
const path = require('path');

// 编译并渲染这份代码
const compiledrenderFunction = pug.renderFile(path.resolve(__dirname,'../test/template.pug'),{
    name: 'lili'
});

console.log(compiledrenderFunction)