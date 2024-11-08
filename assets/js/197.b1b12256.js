(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{487:function(e,s,r){"use strict";r.r(s);var n=r(4),a=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"搜尽全网-整理了19道promise-面试题-你能做对几个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜尽全网-整理了19道promise-面试题-你能做对几个"}},[e._v("#")]),e._v(" 搜尽全网，整理了19道promise 面试题，你能做对几个？")]),e._v(" "),s("p",[s("strong",[e._v("PS:下面题目没有附答案，有了答案想必会降低大家的思考深度，起不到什么效果，完整答案会在后面文章单独发出。")])]),e._v(" "),s("h1",{attrs:{id:"主要考察点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要考察点"}},[e._v("#")]),e._v(" 主要考察点")]),e._v(" "),s("ul",[s("li",[e._v("执行顺序")]),e._v(" "),s("li",[e._v("值透传")]),e._v(" "),s("li",[e._v("错误处理")]),e._v(" "),s("li",[e._v("返回值")]),e._v(" "),s("li",[e._v("链式调用")])]),e._v(" "),s("p",[e._v("最终考察的还是我们对promise的理解程度。")]),e._v(" "),s("h1",{attrs:{id:"目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[e._v("#")]),e._v(" 目标")]),e._v(" "),s("p",[e._v("通关标准，能够给出答案，并且给出合理的解释。【为什么给出这个答案？】")]),e._v(" "),s("h1",{attrs:{id:"_01"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01"}},[e._v("#")]),e._v(" #01")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Promise.resolve(1)\n  .then((res) => {\n    console.log(res)\n    return 2\n  })\n  .catch((err) => {\n    return 3\n  })\n  .then((res) => {\n    console.log(res)\n  })\n")])])]),s("h1",{attrs:{id:"_02"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02"}},[e._v("#")]),e._v(" #02")]),e._v(" "),s("p",[e._v("难易程度：⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const promise = new Promise((resolve, reject) => {\n    console.log(1)\n    resolve()\n    console.log(2)\n})\npromise.then(() => {\n    console.log(3)\n})\nconsole.log(4)\n")])])]),s("h1",{attrs:{id:"_03"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03"}},[e._v("#")]),e._v(" #03")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const promise1 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('success')\n  }, 1000)\n})\nconst promise2 = promise1.then(() => {\n  throw new Error('error!!!')\n})\n\nconsole.log('promise1', promise1)\nconsole.log('promise2', promise2)\n\nsetTimeout(() => {\n  console.log('promise1', promise1)\n  console.log('promise2', promise2)\n}, 2000)\n")])])]),s("h1",{attrs:{id:"_04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_04"}},[e._v("#")]),e._v(" #04")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("setTimeout(()=> console.log(5), 0);\nnew Promise(resolve => {\n    console.log(1);\n    resolve(3);\n    Promise.resolve().then(()=> console.log(4))\n}).then(num => {\n    console.log(num)\n});\nconsole.log(2);\n")])])]),s("h1",{attrs:{id:"_05"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05"}},[e._v("#")]),e._v(" #05")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const promise = new Promise((resolve, reject) => {\n  resolve('success1')\n  reject('error')\n  resolve('success2')\n})\n\npromise\n  .then((res) => {\n    console.log('then: ', res)\n  })\n  .catch((err) => {\n    console.log('catch: ', err)\n  })\n")])])]),s("h1",{attrs:{id:"_05-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-2"}},[e._v("#")]),e._v(" #05")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    console.log('once')\n    resolve('success')\n  }, 1000)\n})\n\nconst start = Date.now()\npromise.then((res) => {\n  console.log(res, Date.now() - start)\n})\npromise.then((res) => {\n  console.log(res, Date.now() - start)\n})\n")])])]),s("h1",{attrs:{id:"_06"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_06"}},[e._v("#")]),e._v(" #06")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Promise.resolve()\n  .then(() => {\n    return new Error('error!!!')\n  })\n  .then((res) => {\n    console.log('then: ', res)\n  })\n  .catch((err) => {\n    console.log('catch: ', err)\n  })\n")])])]),s("h1",{attrs:{id:"_07"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_07"}},[e._v("#")]),e._v(" #07")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const promise = Promise.resolve()\n  .then(() => {\n    return promise\n  })\npromise.catch(console.error)\n")])])]),s("h1",{attrs:{id:"_08"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_08"}},[e._v("#")]),e._v(" #08")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Promise.resolve(1)\n  .then(2)\n  .then(Promise.resolve(3))\n  .then(console.log)\n")])])]),s("h1",{attrs:{id:"_09"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_09"}},[e._v("#")]),e._v(" #09")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Promise.resolve()\n  .then(function success (res) {\n    throw new Error('error')\n  }, function fail1 (e) {\n    console.error('fail1: ', e)\n  })\n  .catch(function fail2 (e) {\n    console.error('fail2: ', e)\n  })\n")])])]),s("p",[e._v("变种后")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Promise.resolve()\n  .then(function success1 (res) {\n    throw new Error('error')\n  }, function fail1 (e) {\n    console.error('fail1: ', e)\n  })\n  .then(function success2 (res) {\n  }, function fail2 (e) {\n    console.error('fail2: ', e)\n  })\n")])])]),s("h1",{attrs:{id:"_10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10"}},[e._v("#")]),e._v(" #10")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("process.nextTick(() => {\n  console.log('nextTick')\n})\nPromise.resolve()\n  .then(() => {\n    console.log('then')\n  })\nsetImmediate(() => {\n  console.log('setImmediate')\n})\nconsole.log('end')\n")])])]),s("h1",{attrs:{id:"_11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11"}},[e._v("#")]),e._v(" #11")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const first = () => (new Promise((resolve, reject) => {\n    console.log(3);\n    let p = new Promise((resolve, reject) => {\n        console.log(7);\n        setTimeout(() => {\n            console.log(5);\n            resolve(6);\n        }, 0)\n        resolve(1);\n    });\n    resolve(2);\n    p.then((arg) => {\n        console.log(arg);\n    });\n\n}));\n\nfirst().then((arg) => {\n    console.log(arg);\n});\nconsole.log(4);\n")])])]),s("h1",{attrs:{id:"_12"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12"}},[e._v("#")]),e._v(" #12")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var p = new Promise((resolve, reject) => {\n  reject(Error('The Fails!'))\n})\np.catch(error => console.log(error.message))\np.catch(error => console.log(error.message))\n")])])]),s("h1",{attrs:{id:"_13"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13"}},[e._v("#")]),e._v(" #13")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var p = new Promise((resolve, reject) => {\n  return Promise.reject(Error('The Fails!'))\n})\np.catch(error => console.log(error.message))\np.catch(error => console.log(error.message))\n")])])]),s("h1",{attrs:{id:"_14"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14"}},[e._v("#")]),e._v(" #14")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var p = new Promise((resolve, reject) => {\n    reject(Error('The Fails!'))\n  })\n  .catch(error => console.log(error))\n  .then(error => console.log(error))\n")])])]),s("h1",{attrs:{id:"_15"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15"}},[e._v("#")]),e._v(" #15")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("new Promise((resolve, reject) => {\n    resolve('Success!')\n  })\n  .then(() => {\n    throw Error('Oh noes!')\n  })\n  .catch(error => {\n    return \"actually, that worked\"\n  })\n  .catch(error => console.log(error.message))\n")])])]),s("h1",{attrs:{id:"_16"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16"}},[e._v("#")]),e._v(" #16")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Promise.resolve('Success!')\n  .then(data => {\n    return data.toUpperCase()\n  })\n  .then(data => {\n    console.log(data)\n    return data\n  })\n  .then(console.log)\n")])])]),s("h1",{attrs:{id:"_17"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17"}},[e._v("#")]),e._v(" #17")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Promise.resolve('Success!')\n  .then(() => {\n    throw Error('Oh noes!')\n  })\n  .catch(error => {\n    return 'actually, that worked'\n  })\n  .then(data => {\n    throw Error('The fails!')\n  })\n  .catch(error => console.log(error.message))\n")])])]),s("h1",{attrs:{id:"_18"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18"}},[e._v("#")]),e._v(" #18")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const first = () => (new Promise((resolve,reject)=>{\n    console.log(3);\n    let p = new Promise((resolve, reject)=>{\n         console.log(7);\n        setTimeout(()=>{\n           console.log(5);\n           resolve(6); \n        },0)\n        resolve(1);\n    }); \n    resolve(2);\n    p.then((arg)=>{\n        console.log(arg);\n    });\n\n}));\n\nfirst().then((arg)=>{\n    console.log(arg);\n});\nconsole.log(4);\n")])])]),s("h1",{attrs:{id:"_19"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19"}},[e._v("#")]),e._v(" #19")]),e._v(" "),s("p",[e._v("难易程度：⭐⭐⭐⭐⭐")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("async function async1() {\n  console.log(1);\n  const result = await async2();\n  console.log(3);\n}\n\nasync function async2() {\n  console.log(2);\n}\n\nPromise.resolve().then(() => {\n  console.log(4);\n});\n\nsetTimeout(() => {\n  console.log(5);\n});\n\nasync1();\nconsole.log(6);\n")])])]),s("h1",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),s("h1",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[e._v("#")]),e._v(" # 最后")]),e._v(" "),s("p",[e._v("以上19个代码题未贴答案，后面会单独发送。")]),e._v(" "),s("p",[e._v("也欢迎大家在留言区回复参与答题。")]),e._v(" "),s("p",[e._v("今天一提就到这里，希望对你有所帮助。")]),e._v(" "),s("p",[e._v("参考资料:")]),e._v(" "),s("p",[e._v("https://zhuanlan.zhihu.com/p/34421918")]),e._v(" "),s("p",[e._v("https://zhuanlan.zhihu.com/p/30797777")]),e._v(" "),s("p",[e._v("https://zhuanlan.zhihu.com/p/98164787")]),e._v(" "),s("p",[e._v("https://juejin.cn/post/6844903986210816013#heading-3")]),e._v(" "),s("p",[e._v("https://juejin.cn/post/6844903605250572302")])])}),[],!1,null,null,null);s.default=a.exports}}]);