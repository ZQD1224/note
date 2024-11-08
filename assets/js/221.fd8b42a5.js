(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{510:function(n,a,t){"use strict";t.r(a);var e=t(4),s=Object(e.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[n._v("#")]),n._v(" 函数式编程")]),n._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/pf2GSrNLnw6dOmJuHfAPrw",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://mp.weixin.qq.com/s/pf2GSrNLnw6dOmJuHfAPrw"),a("OutboundLink")],1)])]),n._v(" "),a("h2",{attrs:{id:"what-is-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-it"}},[n._v("#")]),n._v(" what is it？")]),n._v(" "),a("h3",{attrs:{id:"从两种范式的区别讲起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从两种范式的区别讲起"}},[n._v("#")]),n._v(" 从两种范式的区别讲起")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("命令式编程")])]),n._v(" "),a("li",[a("ul",[a("li",[n._v("命令式编程是面向计算机硬件的抽象，变量对应存储单元，赋值对应寄存器的存取指令，表达式对应内存引用和算术运算，控制语句对应跳转语句。命令式编程就是将程序用一系列的命令组织起来，"),a("strong",[n._v("将问题的步骤分解成一个个的命令")]),n._v("的一种组织方式。")])])]),n._v(" "),a("li",[a("p",[n._v("函数式编程")])]),n._v(" "),a("li",[a("ul",[a("li",[n._v("函数式编程是面向数学的一种抽象，关心的是"),a("strong",[n._v("数据到数据的映射")]),n._v("过程，即是将计算过程抽象描述成一种表达式求值。")])])]),n._v(" "),a("li",[a("p",[n._v("在函数式语言中，"),a("strong",[n._v("函数作为一等公民")]),n._v("，可以在任何地方定义，可以作为参数和返回值，可以对函数进行组合。")])]),n._v(" "),a("li",[a("p",[n._v("函数式编程中的函数不是指的计算机中的函数这个概念，而是数学界函数的概念，在初高中数学中，我们都学到了什么叫函数，函数是一种从"),a("strong",[n._v("x")]),n._v(" -> "),a("strong",[n._v("y")]),n._v("的一种映射关系，如果 "),a("strong",[n._v("f")]),n._v(" 这个映射规则定了，那么f(x) 的值"),a("strong",[n._v("仅与传入的x有关")]),n._v("，函数式编程的思想其实就是如此，其执行结果"),a("strong",[n._v("仅与输入的参数有关")]),n._v("，"),a("strong",[n._v("不依赖")]),n._v("其他外部的状态，也不会产生"),a("strong",[n._v("副作用")]),n._v("，这种函数我们称为"),a("strong",[n._v("纯函数（pure Function）")]),n._v("。")])]),n._v(" "),a("li",[a("p",[n._v("函数式编程中的变量也和命令式编程中的变量的概念不一致，命令式中的变量大多是指存储单元的状态，而函数式中的变量值的是数学中代数上的变量，即一个值的名称，变量的值是不可变的（immutable），即不可以多次给一个变量赋值。函数式编程从理论上说，是通过 "),a("strong",[n._v("lambda")]),n._v(" 演算来进行的。")])])]),n._v(" "),a("h3",{attrs:{id:"pure-function-纯函数-副作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pure-function-纯函数-副作用"}},[n._v("#")]),n._v(" pure function（纯函数） & 副作用")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("纯函数是这样一种函数，只受输入影响，与外部状态无关，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。")])]),n._v(" "),a("li",[a("ul",[a("li",[n._v("此函数在相同的输入值时，需产生相同的输出。函数的输出和输入值以外的其他隐藏信息或"),a("strong",[n._v("状态")]),n._v("[2]无关，也和由I/O设备产生的外部输出无关。")]),n._v(" "),a("li",[a("strong",[n._v("维基")]),n._v("[1]上若一个函数符合以下要求，则它可能被认为是"),a("strong",[n._v("纯函数")]),n._v("：")])])]),n._v(" "),a("li",[a("p",[n._v("该函数不能有语义上可观察的"),a("strong",[n._v("函数副作用")]),n._v("[3]，定义："),a("em",[n._v("副作用_是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的_可观察的交互")]),n._v("。副作用包括：诸如“触发事件”，使输出设备输出，或更改输出值以外物件的内容，更详细的栗子：更改文件系统、往数据库插入记录、发送http请求、可变数据、打印、获取输入、dom查询、访问系统状态。")])])]),n._v(" "),a("p",[n._v("纯函数的输出可以不用和所有的输入值有关，甚至可以和所有的输入值都无关。但纯函数的输出不能和输入值以外的任何资讯有关。纯函数可以传回多个输出值，但上述的原则需针对所有输出值都要成立。以下一个初中数学的图，可以很好的说明这个道理。"),a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoEGx0eTQ1BNqaiaicx3D7oicniazJibyEwM9OgAyszWzMguWicsfEibB89F0Bl8iczPpkzHJMibiabayX49bBA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoEGx0eTQ1BNqaiaicx3D7oicnJPruiawenbKZphsu3Hb93EwOKPrADEVCVxeYNFq8D0ibxrKRvUTzEw6A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),a("h3",{attrs:{id:"再往下-从lambda演算开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再往下-从lambda演算开始"}},[n._v("#")]),n._v(" 再往下（从lambda演算开始）:")]),n._v(" "),a("p",[n._v("计算机科学，尤其是编程语言，经常倾向于使用一种特定的演算："),a("strong",[n._v("lambda演算")]),n._v("[4] （Lambda Calculus）。这种演算也广泛地被逻辑学家用于学习计算和离散数学的结构的本质。Lambda演算伟大的的原因有很多，其中包括：")]),n._v(" "),a("ul",[a("li",[n._v("非常简单。")]),n._v(" "),a("li",[a("strong",[n._v("图灵完备")]),n._v("[5]")]),n._v(" "),a("li",[n._v("容易读写。")]),n._v(" "),a("li",[n._v("语义足够强大，可以从它开始做（任意）推理。")]),n._v(" "),a("li",[n._v("它有一个很好的实体模型。")]),n._v(" "),a("li",[n._v("容易创建变种，以便我们探索各种构建计算或语义方式的属性。")])]),n._v(" "),a("p",[n._v("lambda演算最重要的两个规约：Alpha规约和Beta规约，简单来讲，就是")]),n._v(" "),a("ul",[a("li",[n._v("参数可以任意命名，参数名改变不影响lambda表达式")]),n._v(" "),a("li",[n._v("参数标识符可以用参数值代替")])]),n._v(" "),a("p",[n._v("初中数学知识，对吧。好的，我们再来引入一点知识："),a("strong",[n._v("丘奇数")]),n._v("[6]， 这样我们能表示一定的计算了，再引入逻辑定义，和循环定义，这样是不是就能表达所有计算了。这里就不展开再继续了，有兴趣可以移步阅读 "),a("strong",[n._v("https://cgnail.github.io/academic/lambda-1/")]),n._v("[7]。函数式编程其实就是基于lambda演算衍生出来的。")]),n._v(" "),a("h2",{attrs:{id:"why-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-use-it"}},[n._v("#")]),n._v(" why use it ?")]),n._v(" "),a("p",[n._v("从一个简单的例子讲起：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("const add = (x,y)=>x+y; \nconst multiply = (x,y)=>x*y; add(multiply(b, add(a, c)), multiply(a, b));\n// add(b*(a+c),a*b); // add(add(ab+ac),a*b); // ab+ab+ac multiply(a,add(b,add(b+c)))  \n")])])]),a("p",[n._v("从上面代码可以看出来，函数式的优点，可以任意组合，拆分。")]),n._v(" "),a("h4",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[n._v("#")]),n._v(" 特点：")]),n._v(" "),a("ul",[a("li",[n._v("输出仅与输入有关。")]),n._v(" "),a("li",[n._v("引用透明不依赖外部，举个栗子，就是外面不管地震海啸刮风下雨，你的妈妈在拿到番茄和鸡蛋这两个输入以后，还是会输出番茄炒蛋这个菜，不管外面发生什么，你给你的妈妈输入番茄和鸡蛋，总会得到番茄炒蛋这个菜。换到代码中来就是函数式编程中的函数是没有上下文的，无论上下文怎么变，这个函数的调用结果仅依赖于输入的参数。")]),n._v(" "),a("li",[n._v("不产生副作用。一般来讲 "),a("strong",[n._v("操作数据库")]),n._v(" "),a("strong",[n._v("发起请求")]),n._v(" "),a("strong",[n._v("操作dom")]),n._v(" "),a("strong",[n._v("调用其他副作用函数")]),n._v("，这些活动一般会对外部环境产生影响。")])]),n._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[n._v("#")]),n._v(" 优点：")]),n._v(" "),a("ul",[a("li",[a("strong",[n._v("输入输出显示，方便溯源，同时不会有隐式的状态引入，导致该模块在A处工作正常，但是在B处工作不正常")])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// not pure\n  const a = {x:5,y:10};\n  const b = ()=>{\n    console.log(a.x)\n  }\n  b();// => 5\n   // later ...\n  a.x =10;\n  // later ...\n  b(); // =>10\n// some thing are wrong  \n// 诶 输出为什么变了， b里面怎么计算的，b依赖的啥呀\n// 诶 爷找到他怎么计算的了\n// 为啥前后不一致呢\n// 卧槽 这里为啥改了全局变量\n// pure\nconst b = (obj)=>{\n  console.log(obj?.a)\n}\nb({a:5});\n// 这个东西出问题了.. 参数被改变了 over over\n")])])]),a("ul",[a("li",[n._v("输入输出流显式，只有一个渠道也就是输入参数可以获得数据。")]),n._v(" "),a("li",[n._v("可以得到函数映射表、并发安全 避免竞争、无状态，不会读取外部状态。")]),n._v(" "),a("li",[n._v("不产生副作用纯函数，可以组装起来变成高级纯函数可读性高，可测试性，可复制和重构")])]),n._v(" "),a("h4",{attrs:{id:"展开讲讲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展开讲讲"}},[n._v("#")]),n._v(" 展开讲讲：")]),n._v(" "),a("ol",[a("li",[n._v("输入输出显示，那么我们可以得到这个函数的映射表，说明我们可以对这个函数计算结果进行缓存，如果有同样输入的调用，那么我们可以直接返回计算后的值。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("const memo = (fn)=>{\n    const cache = new Map();\n    return (...args)=>{\n        const key = JSON.stringify(args);\n        if(cache.has(key)){\n            return cache.get(key);\n        }\n        const res = fn.call(fn,...args);\n        cache.set(key,res);\n        return res;\n    }\n}\nconst addOne = memo(x=>x+1);\naddOne(5); // 计算\naddOne(5); // 缓存\n")])])]),a("ol",[a("li",[n._v("可以将一个不纯的函数转换成一个纯函数")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("const pureHttpGet = memo((url,params)=>{\n  return ()=>{\n    return axios.get(url,params);\n  }\n})\n")])])]),a("p",[n._v("这个函数之所以能称为纯函数，他满足纯函数的特性，根据输入，总是返回固定的输出。")]),n._v(" "),a("ol",[a("li",[n._v("可移植性 一句名言：“面向对象语言的问题是，它们永远都要随身携带那些隐式的环境。你只需要一个香蕉，但却得到一个拿着香蕉的大猩猩...以及整个丛林”")]),n._v(" "),a("li",[n._v("可测试性与引用透明，对于一个纯函数，我们可以很清晰的去断言他的输入输出，同时因为引用透明，可以很简单的去推导出函数的内部的调用过程，从而去简化&重构这个函数。")]),n._v(" "),a("li",[n._v("并行：回忆一下操作系统死锁的原因，以及为什么有锁这个机制的存在，就是因为需要使用/更改外部的资源，但是纯函数不需要访问共享内存，所以也不会因为副作用进入竞争态。")])]),n._v(" "),a("h2",{attrs:{id:"core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[n._v("#")]),n._v(" core:")]),n._v(" "),a("ol",[a("li",[n._v("高阶函数")])]),n._v(" "),a("ul",[a("li",[n._v("高阶函数是指对一个函数可以传入一个参数是函数，或者返回值是函数。javascript是天生支持高阶函数和闭包两个重要特性的。我们常用的array方法中 map reduce filter .. 就是高阶函数")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('Array.prototype.fakemap = function (callback, thisArg) {\n    if (!Array.isArray(this)) {\n      throw new Error("Type Error");\n    }\n    if(typeof callback!=="function"){\n        throw new Error(callback.toString()+\'is not a function\')\n    }\n    let resArr = [];\n    let cb = callback.bind(thisArg);\n    for (let i = 0; i < this.length; i++) {\n      resArr.push(cb(this[i], i, this));\n    }\n    return resArr;\n};\n// 高阶函数当然也可以组合使用 与纯函数性质一致\n[1,2,3,4].filter(item=>item>2).map(item=>item -1) \n')])])]),a("ol",[a("li",[n._v("偏函数应用 partial function")])]),n._v(" "),a("ul",[a("li",[n._v("偏函数和柯里化是两个很容易混淆的概念，偏函数是包装一个原始函数接受部分参数作为固定值预设，返回一个新的函数。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 创建偏函数，固定一些参数\nconst partial = (f, ...args) =>\n  // 返回一个带有剩余参数的函数\n  (...moreArgs) =>\n    // 调用原始函数\n    f(...args, ...moreArgs)\n\nconst add3 = (a, b, c) => a + b + c\n\n// (...args) => add3(2, 3, ...args)\n// (c) => 2 + 3 + c\nconst fivePlus = partial(add3, 2, 3)\n\nfivePlus(4)  // 9\n")])])]),a("p",[n._v("js中最常见的 Function.prototype.bind（会改变this指向）,其实就可以实现")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("const foo = (a:number,b:number)=>{\n  return a+b;\n}\nconst bar = foo.bind(null,2);\nbar(3);//5\n")])])]),a("p",[n._v("简单来说，偏函数就是固定部分参数，返回新函数做计算，如果需要完整实现的话，可以参考一下lodash的partial.js这个文件，大致意思简单的将源码思路写一下")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function partial(fn) {\n  const args = Array.slice.call(arguments,1);\n  return function(){\n    const length = args.length;\n    let position = 0;\n    // 把用占位符的参数替换掉\n    for(let i =0 ;i<length,i++){\n      args[i] = args[i]=== _ ? arguments[position++]:args[i]\n    }\n    // 将剩下的参数怼进去\n    while(position<arguments.length) args.push(arguments[postion++]);\n    return fn.apply(this,args)\n  };\n}\n")])])]),a("ol",[a("li",[n._v("柯里化")])]),n._v(" "),a("ul",[a("li",[n._v("柯里化和偏函数应用有些区别，是将多个参数函数转换成单参数的函数。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("const curry = fn => {\n  if (fn.length <= 1) {\n    return fn;\n  }\n  const iter = args =>\n    args.length === fn.length\n      ? fn(...args)\n      : arg => iter([...args, arg]);\n  return iter([]);\n};\n")])])]),a("ol",[a("li",[n._v("闭包")])]),n._v(" "),a("p",[n._v("闭包最初是来源于lambda演算中的一个概念，闭包（closure）或者叫完全绑定（complete binding）。在对一个Lambda演算表达式进行求值的时候，不能引用任何未绑定的标识符。如果一个标识符是一个闭合Lambda表达式的参数，我们则称这个标识符是（被）绑定的；如果一个标识符在任何封闭上下文中都没有绑定，那么它被称为自由变量。")]),n._v(" "),a("ul",[a("li",[a("code",[n._v("lambda x . plus x y")]),n._v("：在这个表达式中，y和plus是自由的，因为他们不是任何闭合的Lambda表达式的参数；而x是绑定的，因为它是函数定义的闭合表达式plus x y的参数。")]),n._v(" "),a("li",[a("code",[n._v("lambda x y . y x")]),n._v("：在这个表达式中x和y都是被绑定的，因为它们都是函数定义中的参数。")]),n._v(" "),a("li",[a("code",[n._v("lambda y . (lambda x . plus x y)")]),n._v("：在内层演算lambda x . plus x y中，y和plus是自由的，x是绑定的。在完整表达中，x和y是绑定的：x受内层绑定，而y由剩下的演算绑定。plus仍然是自由的。")])]),n._v(" "),a("p",[n._v("一个Lambda演算表达式只有在其所有变量都是绑定的时候才完全合法。js中的闭包就不在这啰嗦了，为什么需要闭包，我们可以看一个最简单的柯里化的例子。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("const add = (w,x,y,z)=>w+x+y+z;\nconst curryAdd = curry(add);\n// 根据上面 写的curry函数， 我们来分解一下\n\n\nconst a = curryAdd(1); // 这个时候返回了一个包含1的函数 & add的函数\nconst b = a(2);\nconst c = b(3);\nconst d = c(4);\n// 如果没有闭包，之前传入的东西参数都无迹可寻了。\n")])])]),a("p",[n._v("从webstorm单步调试可以更清楚的知道这个函数的作用域&存在哪些闭包。"),a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIoEGx0eTQ1BNqaiaicx3D7oicnMzISxkMvGseEgibvhoZ54MZ26cpOia7ibh3nJa1zomJGPYSBx6oJ1icChw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),n._v(" "),a("h2",{attrs:{id:"how-do-i-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-use-it"}},[n._v("#")]),n._v(" How do I use it ?")]),n._v(" "),a("ul",[a("li",[n._v("去掉无必要的包裹")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// Bad\nconst BlogController = {\n  index(posts) { return Views.index(posts); },\n  show(post) { return Views.show(post); },\n  create(attrs) { return Db.create(attrs); },\n  update(post, attrs) { return Db.update(post, attrs); },\n  destroy(post) { return Db.destroy(post); },\n};\n// Good\nconst BlogController = {\n  index: Views.index,\n  show: Views.show,\n  create: Db.create,\n  update: Db.update,\n  destroy: Db.destroy,\n};\n")])])]),a("p",[a("code",[n._v("BlogController")]),n._v("，虽说添加一些没有实际用处的间接层实现起来很容易，但这样做除了徒增代码量，提高维护和检索代码的成本外，没有任何用处。")]),n._v(" "),a("p",[n._v("另外，如果一个函数被不必要地包裹起来了，而且发生了改动，那么包裹它的那个函数也要做相应的变更。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("foo(a, b => bar(b)); \n")])])]),a("p",[n._v("如果 "),a("code",[n._v("foo")]),n._v(" 增加回调中处理的函数，那么不只是要改掉foo和bar，所有涉及到的调用也会更改。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("foo(a, (x, y) => bar(x, y)); \n")])])]),a("p",[n._v("写成一等公民函数的形式，要做的改动将会少得多：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("foo(a, bar);  // 只需要更改foo中执行bar的逻辑和 bar中执行的逻辑 \n")])])]),a("ul",[a("li",[n._v("工具函数命名更为通用（拒绝业务化）")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 只针对当前的博客\nconst validArticles = articles =>\n articles.filter(article => article !== null && article !== undefined),\n\n// 对未来的项目更友好\nconst compact = xs => xs.filter(x => x !== null && x !== undefined);\n")])])]),a("ul",[a("li",[n._v("use the poor function")])]),n._v(" "),a("p",[n._v("使用javascript api过程中，不要使用含有副作用的API，而选择无副作用的api。例如 slice 和 splice，肯定是选择slice，不要修改传入的引用对象等。来看一点case")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// bad errInfo 永久的被改动了，如果有其他地方使用到的话，可能会出现问题\nconst valiateRepeatPhone = (phones: string[], errInfo: IErrorInfo[]) => {\n  for (let i = 0; i < phones.length; i++) {\n    if (errInfo[i] === ERROR_TYPE.PHONE_REPEAT) {\n      errInfo[i] = ERROR_TYPE.NULL;\n    }\n    if (\n      errInfo[i] === ERROR_TYPE.NULL &&\n      phones[i] !== '' &&\n      phones.indexOf(phones[i]) !== i\n    ) {\n      errInfo[i] = ERROR_TYPE.PHONE_REPEAT;\n    }\n  }\n};\n// 稍好一点的\nconst valiateRepeatPhone = (phones: string[], errInfo: IErrorInfo[]) => {\n   return errInfo.map((item,index)=>{\n       if(item === ERRORTYPE.PHONE_REPEAT || item === ERROR_TYPE.NULL){\n           return (phones[i] !== '' && phones.indexOf(phones[i]) !== i)\n                   ? ERROR_TYPE.PHONE_REPEAT\n                   : ERROR_TYPE.NULL\n       }\n       return item;\n   })\n} \n")])])]),a("ul",[a("li",[n._v("使用声明式而不是命令式，将依赖当作参数传递")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 命令式\nconst makes = [];\nfor(let i =0;i<car.length;i++){\n  makes.push(cars[i].make);\n}\nconst makes = cars.map(item=>item.make)\n")])])]),a("ul",[a("li",[n._v("compose(将一些纯函数组合起来，返回新函数), 让代码从右到左运行，而不是由内而外运行。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("const compose = (f,g) => {\n  return x => {\n    return f(g(x));\n  }\n}\n")])])]),a("ul",[a("li",[n._v("Monad ：上面我们介绍了compose，但是compose的调用方式，总看起来还是没有那么舒服，在js中链式调用很流行，要实现链式调用，例如(5).add(1).add(4)，那么我们肯定需要一个容器，将5进行一个包装。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Functor {\n    private val:any;\n    private constructor (val: any) {\n       this.val = val;\n    }\n    public static of(val){\n        return new Functor(val);\n    }\n    public map(Fn){\n        return Functor.of(Fn(this.val))\n    }\n    \n}\nFunctor.of(5).map(add5).map(double)\n")])])]),a("p",[n._v("好的，根据上面，其实我们已经实现了一个函数式编程中比较重要的概念，"),a("strong",[n._v("函子（functor）。functor 是实现了 map 函数并遵守一些特定规则的容器类型。")])]),n._v(" "),a("p",[n._v("接下来我们进一步分析，可能会存在一种情况，如果传入是空值，会导致报错。所以需要引入一个函子，Maybe函子,只需要引入一个三则，这样我们就能够过滤空值，防止报错。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Maybe {\n    private val:any;\n    private constructor (val: any) {\n       this.val = val;\n    }\n    public static of(val){\n        return new Maybe(val);\n    }\n    public map(Fn){\n        return this.val ? Maybe.of(Fn(this.val)) : Maybe.of(null);\n    }\n    \n}\nMaybe.of(5).map(add5).map(double)\n")])])]),a("p",[n._v("好的，我们现在已经得到了一个可以过滤空值的函数，但是我们现在在执行完调用后，我们获得的是一个什么呢，是一个对象对吧，我们还需要把值取出来，所以需要添加一个取值的方法")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Maybe {\n   private val:any;\n   private constructor (val: any) {\n      this.val = val;\n   }\n   public static of(val){\n       return new Maybe(val);\n   }\n   public map(Fn){\n       return this.val ? Maybe.of(Fn(this.val)) : Maybe.of(null);\n   }\n   public join(){\n       return this.val;\n   }\n}\nMaybe.of(5).map(add5).map(double).join()\n")])])]),a("p",[n._v("好了，我们现在可以拿到值了，但是，如果may层次太高，我们是不是需要像洋葱一样去剥开他的心，那更简单的是什么呢，在我们需要的时候去剥开它。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Maybe {\n    private val:any;\n    private constructor (val: any) {\n       this.val = val;\n    }\n    public static of(val){\n        return new Maybe(val);\n    }\n    public map(Fn){\n        return this.val ? Maybe.of(Fn(this.val)) : Maybe.of(null);\n    }\n    public join(){\n        return this.val;\n    }\n    public chain(Fn) {\n        return this.map(Fn).join();\n    }\n}\nMaybe.of(5).map(add5).chain(Maybe.of(double))\n")])])]),a("h4",{attrs:{id:"io-monad-一个例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io-monad-一个例子"}},[n._v("#")]),n._v(" IO monad，一个例子")]),n._v(" "),a("p",[n._v("如果我们要写一个对dom的读写操作，将一个文本转换为大写，先定义一下以下方法")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("const $ = (id: string) => <HTMLElement>document.querySelector(`#${id}`);\nconst read = (id: string) => $(id).value;\nconst write = (id: string) => (text: string) => $(id).textContent = text;\n// not pure,因为函数中操作了dom，对外部进行了改变\nfunction syncInputToOutput(idInput: string, idOutput: string) {\n  const inputValue = read(idInput);\n  const outputValue = inputValue.toUpperCase();\n  write(idOutput, outputValue);\n}\nexport default class IO<T> {\n  private effectFn: () => T;\n\n  constructor(effectFn: () => T) {\n    this.effectFn = effectFn;\n  }\n\n  bind<U>(transform: (value: T) => IO<U>) {\n    return new IO<U>(() => transform(this.effectFn()).run());\n  }\n\n  run(): T {\n    return this.effectFn();\n  }\n}\n\nconst read = (id: string) => new IO<string>(() => $(id).value);\nconst write = (id: string) => (text: string) => new IO<string>(() => $(id).textContent = text);\n\nfunction syncInputToOutput(idInput: string, idOutput: string) {\n  read(idInput)\n    .bind((value: string) => new IO<string>(() => value.toUpperCase()))\n    .bind(write(idOutput)))\n    .run();\n}\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);