## 迭代 Iteration
Pug 目前支持两种主要的迭代方式： each 和 while。

## each
```
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```
可以使用 for 作为 each 的别称
## while
```
- var n = 0;
ul
  while n < 4
    li= n++
```