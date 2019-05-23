## 属性 Attribute
标签属性和 HTML 语法非常相似，但它们的值就是普通的 JavaScript 表达式。您可以用逗号作为属性分隔符，不过不加逗号也是允许的  
`|` 本示例用于控制空格
```
a(href='baidu.com') 百度
|
|
a(class='button' href='baidu.com') 百度
|
|
a(class='button', href='baidu.com') 百度
```
```
<a href="baidu.com">百度</a>
<a class="button" href="baidu.com">百度</a>
<a class="button" href="baidu.com">百度</a>
```
js表达式也可以使用：
```
- var authenticated = true
body(class=authenticated ? 'authed' : 'anon')
```
## 多行属性
```
input(
  type='checkbox'
  name='agreement'
  checked
)
```
同样支持es6模版字符串
```
input(data-json=`
  {
    "非常": "长的",
    "数据": true
  }
`)
```

## 属性嵌入
```
- var url = 'pug-test.html';
a(href='/' + url) 链接
|
|
- url = 'https://example.com/'
a(href=url) 另一个链接
```

## 样式属性
style（样式）属性可以是一个字符串（就像其他普通的属性一样）还可以是一个对象，这在部分样式是由 JavaScript 生成的情况下非常方便
```
a(style={color: 'red', background: 'green'})
```

## 类属性（class）

class（类）属性可以是一个字符串（就像其他普通的属性一样）还可以是一个包含多个类名的数组
```
- var classes = ['foo', 'bar', 'baz']
a(class=classes)
|
|
//- the class attribute may also be repeated to merge arrays
a.bang(class=classes class=['bing'])
```
它还可以是一个将类名映射为 true 或 false 的对象，这在使用条件性的类的时候非常有用。
```
- var currentUrl = '/about'
a(class={active: currentUrl === '/'} href='/') Home
|
|
a(class={active: currentUrl === '/about'} href='/about') About
```

## 类的字面值
类可以使用 .classname 语法来定义
```
a.button
```
考虑到使用 div 作为标签名这种行为实在是太常见了，所以如果您省略掉标签名称的话，它就是默认值
```
.content  => <div class="content"></div>
```

## id的字面值
ID 可以使用 #idname 语法来定义：
```
a#main-link
```
## &attributes

&attributes 语法可以将一个对象转化为一个元素的属性列表。
```
div#foo(data-bar="foo")&attributes({'data-foo': 'bar'})
```
