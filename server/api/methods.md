## pug.compile(source, ?options) 
把一个 Pug 模板编译成一个可多次使用、可传入不同局部变量渲染的函数
1. source: string  
需要编译的 Pug 代码
2. options: ?options  
存放选项的对象
3. returns: function  
一个可以从包含局部变量的对象渲染生成出 HTML 的函数
```
var pug = require('pug');

var fn = pug.compile('p this is  pug #{name}');
console.log(fn())
var html = fn({
    name: 'compile'
});
console.log(html)

//<p>this is  pug </p>
//<p>this is  pug compile</p>
```
## pug.compileFile(path, ?options)
从文件中读取一个 Pug 模板，并编译成一个可多次使用、可传入不同局部变量渲染的函数
1. path: string  
需要编译的 Pug 代码文件的位置
2. options: ?options  
存放选项的对象 
3. returns: function  
一个可以从包含局部变量的对象渲染生成出 HTML 的函数

```
const pug = require('pug');
const path = require('path');

// 编译这份代码
const compiledFunction = pug.compileFile(path.resolve(__dirname,'../../test/template.pug'));

//渲染
console.log(compiledFunction({
name: '李莉'
}));

//<p>李莉的pug代码！</p>
```
## pug.compileClient(source, ?options) 

把一个 Pug 模板编译成一份 JavaScript 代码字符串，它可以直接用在浏览器上而不需要 Pug 的运行时库。

1. source: string  
需要编译的 Pug 代码
2. options: ?options  
存放选项的对象
3. returns: string  
一份 JavaScript 代码字符串
```
var pug = require('pug');

var fn = pug.compileClient('p this is  pug #{name}',{
    name: 'aa'
});

console.log(fn)
```

## pug.compileFileClient(path, ?options) 

从文件中读取一个 Pug 模板并编译成一份 JavaScript 代码字符串，它可以直接用在浏览器上而不需要 Pug 的运行时库。

1. path: string  
需要编译的 Pug 代码文件的位置
2.  options: ?options  
存放选项的对象
3.  options.name: string  
如果您传递了 .name 属性给选项对象，那么编译出来的函数名称就会被换成这个属性指定的名称。
4. returns: string  
一份 JavaScript 代码字符串

```
const pug = require('pug');
const path = require('path');

const compiledFunction = pug.compileFileClient(path.resolve(__dirname,'../../test/template.pug'));

console.log(compiledFunction)
```
## pug.render(source, ?options, ?callback) 
1. source: string  
需要渲染的 Pug 代码
2. options: ?options  
存放选项的对象，同时也直接用作局部变量的对象
3. callback: ?function  
Node.js 风格的回调函数，用于接收渲染结果。注意：这个回调是同步执行的。
4. returns: string  
渲染出来的 HTML 字符串
```
const pug = require('pug');
const path = require('path');

// 编译并渲染这份代码
const html = pug.render('p this is #{name}',{
    name: 'lili'
});

console.log(html)
//<p>this is lili</p>
```
