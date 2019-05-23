## 分支条件case
case 是 JavaScript 的 switch 指令的缩写，并且它接受如下的形式：
```
- var friends = 10
case friends
  when 0
    p 您没有朋友
  when 1
    p 您有一个朋友
  default
    p 您有 #{friends} 个朋友
```
## break
如果某个条件时不想输出任何东西，可以break
```
- var friends = 0
case friends
  when 0
    - break
  when 1
    p 您的朋友很少
  default
    p 您有 #{friends} 个朋友
```
## 块展开：

```
- var friends = 1
case friends
  when 0: p 您没有朋友
  when 1: p 您有一个朋友
  default: p 您有 #{friends} 个朋友
  ```
