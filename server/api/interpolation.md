## 嵌入 Interpolation
Pug 提供了若干种操作符以满足您不同的嵌入需求
## 字符串嵌入，转义
```
- var title = "On Dogs: Man's Best Friend";
- var author = "enlore";
- var theGreat = "<span>转义!</span>";

h1= title
p #{author} 笔下源于真情的创作。
p 这是安全的：#{theGreat}
```
## 字符串嵌入，不转义
```
- var riskyBusiness = "<em>我希望通过外籍教师 Peter 找一位英语笔友。</em>";
.quote
  p 李华：!{riskyBusiness}
```

## 标签嵌入
将 Pug 的标签语句用 #[ 和 ] 括起来就可以了
```
p.
  这是一个很长很长而且还很无聊的段落，还没有结束，是的，非常非常地长。
  突然出现了一个 #[strong 充满力量感的单词]，这确实让人难以 #[em 忽视]。
p.
  使用带属性的嵌入标签的例子：
  #[q(lang="es") ¡Hola Mundo!]
```