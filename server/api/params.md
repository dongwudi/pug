## filename: string
要编译的代码的文件名。用于异常信息以及（使用相对路径的）包含（include）和扩展（extends）操作。默认值是 'Pug'。
## basedir: string
模板里所有绝对定位的根目录。
## doctype: string
如果 doctype 没有出现模板里（比如模板只渲染一个 HTML 片段），那么您可以在这里指定它。在一些需要控制自闭合标签和布尔值属性的代码样式的时候非常有用。您可以阅读 doctype 的说明来了解更多细节。
## pretty: boolean | string
（不赞成使用）在输出的 HTML 里添加 '  ' 这样的空格缩进来获得更好的代码可读性。如果这里指定了一个字符串（比如 '\t'），那么将会使用它作为控制缩进的字符。我们强烈建议您不要使用这个选项，它改变解释器和空格渲染工作的方式会极其频繁地导致一些错误。我们将会在未来移除这个功能。默认为 false。
## filters: object
存放自定义过滤器的哈希表。默认为 undefined。
## self: boolean
是否使用一个叫做 self 的命名空间来存放局部变量。这可以加速编译的过程，但是，相对于原来书写比如 variable 来访问局部变量，您将需要改为 self.variable 来访问它们。默认为 false。
## ebug: boolean
当设置为 true 时，编译产生的函数代码会被记录到标准输出。
## compileDebug: boolean
当设置为 true 时，源代码会被包含在编译出来的模板函数中，用于提供更详实的错误信息（这在开发时会有用）。它默认是启用的，除非是在 Express 的生产环境模式中。
## globals: Array<string>
该数组用于向模板中添加全局对象的名字，编译器将保证它们不被局部作用域影响。
## cache: boolean
当设置为 true 时，编译出来的函数会被缓存下来。此时必须填写 filename 选项作为缓存的索引字段。该选项仅用于 render 函数。默认为 false。
## inlineRuntimeFunctions: boolean
相对于使用 require 来获得公用的运行时函数，是否需要直接嵌入这些运行时函数。在 compileClient 函数里默认是 true，因此就不需要再手动包含那些函数（从而让其能在浏览器上运行）。在其他的 compile / render 系列函数中，默认是 false。
## name: string
模板函数的名称。仅用于 compileClient 函数。默认值是 'template'。