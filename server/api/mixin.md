## 混入 Mixin
混入是一种允许您在 Pug 中重复使用一整个代码块的方法
```
//- 定义
mixin list
  ul
    li foo
    li bar
    li baz
//- 使用
+list
+list
```
它们会被编译成函数形式，您可以传递一些参数
```
mixin pet(name)
  li.pet= name
ul
  +pet('猫')
  +pet('狗')
  +pet('猪')
```
## 混入的块
混入也可以把一整个代码块像内容一样传递进来
```
mixin article(title)
  .article
    .article-wrapper
      h1= title
      if block
        block
      else
        p 没有提供任何内容。

+article('Hello world')

+article('Hello world')
  p 这是我
  p 随便写的文章
  ```