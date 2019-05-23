## 模板继承 Inheritance
Pug 支持使用 block 和 extends 关键字进行模板的继承。一个称之为“块”（block）的代码块，可以被子模板覆盖、替换。这个过程是递归的  
 extends 来指出这个被继承的模板的路径
```
//- layout.pug
html
  head
    title 我的站点 - #{title}
  body
    block content
    block foot
      #footer
        p 一些页脚的内容
```
```
//- page-a.pug
extends layout.pug

block content
  h1= title
  - var pets = ['猫', '狗']
  each petName in pets
    include pet.pug
```

```
//- pet.pug
p= petName
```

## 块内容的添补 append / prepend
Pug 允许您去替换（默认的行为）、prepend（向头部添加内容），或者 append（向尾部添加内容）一个块。 假设您有一份默认的脚本要放在 head 块中，而且希望将它应用到 每一个页面，那么您可以这样做
```
//- layout.pug
html
  head
    block head
      script(src='/vendor/jquery.js')
      script(src='/vendor/caustic.js')
  body
    block content
```
现在假设您有一个页面，那是一个 JavaScript 编写的游戏。您希望把一些游戏相关的脚本也像默认的那些脚本一样放进去，那么您只要简单地 append 这个块：
```
//- page.pug
extends layout.pug

block append head
  script(src='/vendor/three.js')
  script(src='/game.js')
```
当使用 block append 或者 block prepend 时，block 关键字是可省略的