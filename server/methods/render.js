const pug = require('pug');
const path = require('path');

// 编译并渲染这份代码
const html = pug.render('p this is #{name}',{
    name: 'lili'
});

console.log(html)