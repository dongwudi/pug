const pug = require('pug');
const path = require('path');

// 编译这份代码
const compiledFunction = pug.compileFile(path.resolve(__dirname,'../test/template.pug'));

//渲染
console.log(compiledFunction({
name: '李莉'
}));

console.log(compiledFunction({
name: '张伟'
}));