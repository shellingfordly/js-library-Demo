# 知识点

## CSS

### 复合图层以及硬件加速

 

#### 硬件加速

网页中绘制3D图形是使用webgl的api（基于gpu的api开源库opengl实现），为了让3D动效的性能更好，可以使用css的一些属性开启gpu渲染，也就是硬件加速，当然，这会耗费一个内存。

浏览器在处理transform、opacity、filter、will-change时会使用gpu渲染。浏览器会把内容分到不同的图层进行分别渲染，最后合并到一起，触发gpu渲染硬件加速需要新建图层，把元素移动到新图层是个耗时的操作，界面可能会闪一下，所有可以提前告诉浏览器一开始就把元素放到新的图层，方便后面直接用gpu渲染。

- 手动开启gpu渲染
  - 打开浏览器调试，蓝色框的元素是cpu渲染的，黄色框的元素是gpu渲染的
  - transform、opacity、filter会默认开启gpu渲染

```css
{
  /* 1 */
  will-change: transform;
  will-change: opacity;
  will-change: filter;
  /* 2 */
  transform: translate3d(0, 0, 0);
}
```

在Chrome、FireFox、Safari、IE9+和最新的Opera都支持硬件加速，当使用到transform、opacity、filter、will-change这些css规则时就会开启，比如下面的css就会默认开启硬件加速。

```css
{
  transform: translate3d(10px, 10px, 10px);
  transform: rotate3d(1, 1, 1, 45deg);
  transform: scale3d(0.5, 0.5, 0.5);
}
```

- 但有时可能我们不需要对元素应用3D变化的效果，此时可以借助transform欺骗浏览器开启硬件加速

```css
{
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
```

- 解决使用transform/animations时页面闪烁

```css
{
  backface-visibility: hidden;
  perspective: 1000;
}
```

- webkit内核浏览器，有另一个方法

```css
{
  transform: translate3d(0, 0, 0);
}
```

- 需要注意
  - 太多元素使用css3硬件加速会导致内存占用过大，有性能上的问题
  - 由于GPU和CPU的算法不同，GPU渲染字体会导致抗锯齿无效，如果不在动画结束后关闭硬件加速，会产生字体模糊

### css预加载

### 布局方式

### 定位

- 绝对定位
- 相对定位

### em/rem/px/rpx/vh/vw

### flex/grid

### 1px问题


## JS

### promise

#### promise原理
promise的实现原理就是使用回调函数，当调用then方法时，将回调函数收集在promise内部，执行resovle时去依次执行收集的回调数组

#### promise实现

```js
class Promise {
  callbacks = [];
  state = 'pending';//增加状态
  value = null;//保存结果
  constructor(fn) {
      fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
      if (this.state === 'pending') {//在resolve之前，跟之前逻辑一样，添加到callbacks中
          this.callbacks.push(onFulfilled);
      } else {//在resolve之后，直接执行回调，返回结果了
          onFulfilled(this.value);
      }
      return this;
  }
  _resolve(value) {
      this.state = 'fulfilled';//改变状态
      this.value = value;//保存结果
      this.callbacks.forEach(fn => fn(value));
  }
}
```

#### promise all 实现


1. 作用
- 需要请求多个api并且有执行顺序时，因为promise.all返回的结果和传入的的顺序是一致的
- 提高请求速度

2. 实现
首先，promise.all接受一个promise数组，定义一个变量存储promise数组的长度，然后返回一个promise，在这个promise种循环promise数组调用其then方法，如果抛错则直接执行返回promise的reject回调。
反之定一个数组收集到所有的resolve，记录成功返回数，当count等于接受的promise数组时调用resolve返回结果数组

#### 执行顺序

- https://www.jianshu.com/p/910e22a3ba18

### setTimeout

- 最短时间间隔不得低于4ms，老版本为10ms
- 对于dom变动，重新渲染的部分通常不会立即执行，每16ms执行一次
- requestAnimationFrame的效果好于setTimeout


- setTimeout只是将事件插入了“任务队列“，必须等到当前代码（执行栈内部的同步代码）的执行结束，主线程才会去执行它的回调函数，因此如果当前代码执行时间很长，setTimeout的回调函数就得继续等待，所以是无法保证准时执行的

### event loop

- 事件循环
首先是脚本，然后是微任务，渲染等

![event-loop](./imgs/event-loop.png) 

- 每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务，或渲染，或进行其他任何操作

- 微任务会在执行任何其他事件处理，或渲染，或执行任何其他宏任务之前完成

首先会执行栈中的代码，同步任务，就是全局的同步代码，其他的点击事件，以及ajax请求、setTimeout等等异步任务将会进入任务队列中等待，当执行栈的任务执行完毕之后，会从任务队列中按照先进先出的原则执行。当一个宏任务执行完毕之后，会清空所有的微任务，然后再读取下一个宏任务，反复如此。

- 点击事件会先被加入任务队列？异步任务在其后？
- 异步队列存放宏任务和微任务吗？
- 微任务是有别的队列吗？
- 只有同步任务和异步任务，异步任务是指不进入主线程，而进入任务队列的任务，那异步的宏任务和微任务在队列中怎么排列的？以怎样顺序加入任务队列的？

js是一个单线程的，异步和多线程的实现是通过event loop事件循环机制来实现的。首先是从全局的同步代码一行一行的压入执行栈中执行，当遇到setTimeout等属于宏任务的异步代码时，将其添加到消息队列（Message Queue）中；当遇到promise等微任务的异步代码时，将其添加到微任务队列（Microtask Queue）中；执行完执行栈中的同步代码之后，会先清空Microtask Queue内的代码，然后再从Message Queue中读取一个事件执行


#### 宏任务

- setInterval
- setTimeout


#### 微任务

- new Promise
- new MutaionObserver

#### 一些相关文章
- https://zh.javascript.info/event-loop


### 函数柯里化

### 防抖
- 函数防抖
  - 就是指触发事件后，在 n 秒后只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数的执行时间
  - 简单点说就是在一段时间内只执行最后一次
    - 🌰 坐公交，司机需要等最后一个人进入才能关门。每次进入一个人，司机就会多等待几秒再关门
  - 解决某些频繁执行的事件，比如点击事件，滚动事件等等

- 应用场景
  - 搜索框搜索输入，只需要用户最后一次输入完再发送请求
  - 手机号、邮箱格式的输入验证检测
  - 窗口大小的 resize ，只需窗口调整完成后，计算窗口的大小，防止重复渲染

```js
function debounce(callback, delay) {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(callback, delay)
  }
}
```

```js
/**
 * 优化代码
 *    1. 修改通过debounce处理后的函数的this指向为调用时所处的环境的this
 *    2. 传递参数
*/
function debounce(callback, delay) {
  let timer = null
  // 修改为function声明形式，否则this指向debounce内部this
  return function () {
    // 保存实际调用返回函数时传递的参数
    const arg = arguments
    // 保存this
    const _this = this
    if (timer) {
      clearTimeout(timer)
    }
    // 使用apply改变this指向为 callback 实际调用的环境，传递参数
    timer = setTimeout(() => callback.apply(_this, arg), delay)
  }
}

// 使用
const fn = debounce(function (xx) {
  console.log(xx, this);
}, 1000)
btn.onclick = function () {
  // 需要使用call改变this指向，否则此时是在window下直接调用的
  fn.call(this, 'xxx')
}
```

- 优化
  - 由于箭头函数没有this和arguments，因此可以简略一些代码

```js
function debounce(callback, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.apply(this, arguments)
    }, delay)
  }
}
```
### 节流

- 函数节流
  - 限制一个函数在一定时间内只能执行一次
    - 🌰 过地铁/火车闸机时，每个人进入后3秒后门关闭，等待下一个人进入

- 应用场景
  - 滚动加载，加载更多或滚动到底部监听
  - 谷歌搜索框，搜索联想功能
  - 高频点击提交，表单重复提交
  - 省市信息对应字母快速选择

```js
function throttle(callback, delay){
  let timer = timer

  return function () {
    if(timer) {
      return 
    }
    timer = setTimeout(()=>{
      callback()
      timer = null
    }, delay)
  }
}
```

```js
// 优化this指向和传参

function throttle(callback, delay){
  let timer = timer

  return function () {
    const args = arguments
    const _this = this
    if(timer) {
      return 
    }
    timer = setTimeout(()=>{
      callback.apply(this, args)
      timer = null
    }, delay)
  }
}
```


### 防抖和节流对比

- 共同点
  - 都是一段时间内只执行一次函数
- 不同点
  - 防抖在一段时间内只执行最后一次，一但此事件被连续执行，会清除之前开启的定时器，重新开启新的定时器
  - 节流在一段时间内只执行第一次，当事件被连续执行时，只有第一次进入函数是会开启定时器，之后一段时间内判断定时器已开启，就会直接return，直到第一次执行完毕，清除了定时器id才会重新执行
  - 因此，防抖和节流的效果对比，当连续点击btn执行函数时，防抖是只有在停止点击之后一段时间之后执行函数；而节流在连续点击时是以设置的delay时间为间隔，连续执行函数，停止点击后执行完最后一段时间内的一次函数则不在执行




### 深拷贝/浅拷贝

#### 浅拷贝

- =
- {...object}
- Object.assign(target, ...sources)


#### 深拷贝

- 代码最少，性能最差，有缺陷
  - 只有能正确处理 Number, String, Boolean, Array, 扁平对象，RegExp对象无法拷贝（拷贝成空对象{}），function也不行，直接拷贝不了这个属性

```js
function deepCopy(obj){
  return JSON.parse(JSON.stringify(obj))
}
```

- 简洁版，for in性能略差

```js
function deepCopy(obj){
  const newObj = Array.isArray(obj) ? [] : {}
  if(typeof(obj) !== 'object') {
    return obj
  }
  for(let key in obj) {
    newObj[key] = deepCopy(obj[key])
  }
  return newObj
}
```

### call/apply

- call和apply

### 实现setInterval

```js
function mySetInterval(callback, delay){
  setTimeout(()=>{
    callback()
    mySetInterval(callback, delay)
  }, delay)
}
```


### 原型链

- instanceof 怎么判断类型的

#### prototype

- 属性为什么要挂载在原型链上

### 继承
- 有哪些继承方式
- 为什么舍弃原来的继承方式
- es5实现继承
- prototype继承的缺陷

#### 继承方式

```js
// 父类
function Person(name) {
  this.name = name
  this.say = function () {
      console.log('I am ' + name)
  }
}
Person.prototype.age = '10'
```


1. 原型链继承

- 优点
  - 继承属性：父类的私有属性，父类的原型属性
- 缺点
  - 无法向父类的构造函数传参
  - 继承单一
  - 不管是父类的实例私有属性还是原型上的公有属性统统被设置成了子类原型上的公有熟悉
  - 所有实例共享父类实例的属性，因为子类Per的原型上的属性是子类实例共享的，一个实例修改了原型上的属性，所有实例继承的这个属性都被修改了

```js
function Per() {
  this.name = 'per'
}
Per.prototype = new Person()
const p =new Per('tom')
```

- 此种继承方法会导致子类直接修改到父类的公有属性

```js
Per.prototype = Person.prototype
```

2. 使用构造函数继承
- 优点
  - 可以在子类中向父类传参
  - 解决了原型链继承的缺点：无法传参、继承单一，属性共有问题
- 缺点
  - 只继承了构造函数Person的私有属性，无法继承Person原型prototype的公有属性
  - 每次都要重新调用，无法实现构造函数的复用
  - 每个子实例都相当于去拷贝一份父类Person的副本，比较臃肿

```js
function PerCall(){
  // 使用call传递PerCall创建的实例给Person，相当于去做了一遍this.xxxx的赋值操作，拷贝了一份Person实例的属性
  Person.call(this, 'percall')
}
```

3. 组合继承

- 优点
  - 可以传参、可复用
  - 父类的私有属性在子类中还是私有属性
- 缺点
  - 调用了两次父类Person的构造函数
  - Person.call已经设置过的私有属性，在prototype上又被new父类的实例再次挂载到了子类的原型上

```js
function PerAll (name){
  Person.call(this, name)
}
PerAll.prototype = new Person()
```

- 解决组合式继承原型上多一份父类Person的私有属性问题

```js
function Fn(){}
Fn.prototype = Person.prototype
PerAll.prototype = new Fn()
```


4. 原型式继承

- 特点
  - 所有实例都会继承原型链上的属性
  - Object.create()的原理
- 缺点
  - 无法实现复用

```js
function Extends(obj){
  function Fn(){}
  Fn.prototype = obj
  return new Fn()
}
const p = new Person()
const p4 = Extends(p)
```

5. 

### super


### 基础知识


#### 字符串方法

- slice(start, end) 切割字符串，不包含end
- substr(start, end) 切割字符串，包含end

### 迭代器


### async/await

- 它是什么的语法塘

## ts

### keyof

### typeof


## 设计模式

### ES Module

### CommonJS

### 导入导出方式


## 浏览器

### 思考

- 浏览器解析完dom树之后做什么
- 浏览器将html展示到页面做了什么
- 回流和重绘
  - 什么样的情况下触发回流
  - 什么样的情况下触发重绘


### 浏览器渲染过程

1. 解析HTML，生成DOM树，解析CSS，生成CSSOM树
2. 将DOM树和CSSOM树结合，生成渲染树（render tree）
3. reflow（回流）：根据生成的渲染树，进行回流，得到节点的几何信息（位置、大小）
4. painting（重绘）： 根据渲染树以及回流的到的几何信息，得到节点的绝对像素
5. display：将像素发送给GPU，展示在页面上（比如GPU将多个合成层合并成同一层）


#### 构建渲染树

1. 从DOM树的根节点开始遍历每个可见节点
2. 对每个可见节点，找到CSSOM树种对应规则，并应用
3. 根据每个可见节点以及对应的样式，组成渲染树

- 非可见节点
  - script、meta、link
  - display: none 隐藏的节点
- 可见节点
  - visibility/opacity隐藏的节点还是会显示到渲染树上
- 渲染树只有可见节点

- 问题
  - 那么非可见节点如何挂载到渲染树上
  - 添加/删除元素，以及元素的display显隐是怎么处理渲染树的，有什么区别

### 回流和重绘

#### 回流
- 当render tree的一部分因为元素的规模尺寸、布局、隐藏等改变时需要重新构建，这就是回流
- 每个页面至少需要一次回流，在页面第一次加载的时候，一定会发生回流，因为要构建render tree
  - render tree是dom tree和css tree组合构建而成
- 在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树
- 完成回流后，浏览器会重新绘制受影响的部分到页面上，此过程为重回

- 引起回流的因素
  - 添加删除可见dom
  - 元素位置改变
  - 元素尺寸改变（边框、边距、填充、宽度、高度）
  - 内容发生变化，
    - 文本变化
    - 图片被不同尺寸的图片替换
    - input框输入文字
    - css3动画
  - 激活CSS伪类，比如hover
  - 操作class属性
  - 计算offset等等属性
  - 设置style属性值
  - 页面一开始渲染时
  - 浏览器窗口尺寸变化（因为回流是根据视口大小来计算元素位置和大小的）
  - 改变字体
  - 增加或者移除样式表

#### 重绘

- 通过构建渲染树和回流阶段，得到了可见节点的样式和具体几何信息（位置、大小），把渲染树的每个节点都转换为屏幕上的实际像素，这个阶段就叫重绘节点

- 当render tree中的一些元素需要更新属性，比如影响元素外观、风格此类不会影响布局的属性，浏览器会重新绘制这个元素，这个过程就是重绘

#### 区别

- 回流必会引起重绘，而重绘不一定会引起回流
  - 比如颜色改变等等
- 当页面布局和几何属性改变时就需要回流
  - 比如操作dom、改变位置等等
- 而重绘是视觉效果变化引起
  - 比如修改color、background


#### 浏览器优化机制

根据改变的范围和程度，渲染树中或大或小的部分需要重新计算，有些改变会触发整个页面的重排，比如出现滚动条和修改根节点

每次重排都会造成额外的计算消耗，浏览器会通过队列化修改并批量执行来优化重排过程。将修改操作放入队列里，直到过了一段时间或操作达到了一个阈值，再清空队列。

- 当获取布局信息时会强制队列刷新
 - offsetTop、offsetLeft、offsetWidth、offsetHeight
 - scrollTop、scrollLeft、scrollWidth、scrollHeigh
 - clientTop、clientLeft、clientWidth、clientHeight
 - getComputedStyle()
 - getBoundingClientRect

#### 减少重绘和重排
- 由于重绘和重排代价比较高，所以最好减少其发生的次数，可以通过合并多次对DOM的样式修改，一次性处理掉
  - 使用cssText
  - 通过修改css的class来改变元素样式
- 批量修改DOM
  - 使元素脱离文档流，对其进行多次操作，再将元素带回文档
- 脱离文档流
  - 隐藏元素 --> 应用修改 --> 重新显示
  - 使用文档片段（document fragment）构建一个子树，再把它拷贝回文档
  - 将原始元素拷贝到一个脱离文档的节点中，修改完再替换原始元素
- 避免table布局

```js
// 隐藏元素进行修改
ul.style.display = 'none';
handleUlAction(ul, data)
ul.style.display = 'block';

// 文档片段修改
const fragment = document.createDocumentFragment();
appendDataToElement(fragment, data);
ul.appendChild(fragment);

// 拷贝修改
const clone = ul.cloneNode(true);
appendDataToElement(clone, data);
ul.parentNode.replaceChild(clone, ul);
```

#### 问题


1. 添加删除不可见（display: none）元素会不会引起回流？

- 自我感觉是不会的，因为display的元素不是可见元素，不会在被挂在渲染树上，因为删除/添加都不会引起渲染树的变化，不会引起回流。而显示隐藏元素只会触发重绘，不会触发回流，因此不管怎么操作不可见元素都不会引起回流重绘，只有在显示的时候、或者隐藏的时候触发重绘。


2. 滚动条会触发回流吗

- 如果使用了fixed定位的元素，其dom是相对于浏览器的窗口进行定位的，没滚动一点，元素就会重新计算定位高度位置，导致触发回流。fixed定位只会对自身元素进行渲染，不会影响身边的DOM


3. 修改根节点会触发回流重绘吗

- 从上述资料来看，修改根节点会触发回流重绘这个问题不够严谨，看修改的是什么属性导致可能触发回流，也可能只触发重绘


## HTTP

### 请求头


### 状态码


### http缓存

- 强缓存协商缓存


## ajax

### axios

### fetch


### axios对比fetch


## VUE

### 生命周期
- 每个生命周期做了什么

### 发布订阅模式

### 观察者模式
- 什么是观察者模式

### VUE2
- 一个组件从编译到渲染的过程

### nextTick
- 实现原理

### VUE3
- 新特性
- setup语法塘

### VUE2/VUE3对比

### MVVM

### MVM

### SPA/MPA

## React

## 优化

- 性能优化
- 响应优化
- 首屏优化
- seo
- cdn网络加速
- 前端页面优化
- 数据优化
- 百万级数据的表格


## 打包

### webpack
- 从入口到出口这个过程做了什么
- gzip

webpack是基于入口的，它会自动地递归解析入口所需要加载的所有资源文件，然后用不同的loader来处理不同的文件，用plugin来扩展webpack的功能


1. 构建流程，从读取配置到输出文件的过程



2. 常见的loader

- file-loader 把文件输出到一个文件夹中，在代码中通过相对的url引用输出文件
- url-loader 在文件很小的情况下以base64的方式把文件内容注入代码中
- image-loader 加载压缩图片文件
- babel-loader 把es6转换成es5
- css-loader 加载css，支持模块化、压缩、文件导入等特性
- style-loader 把css代码注入到js中，通过dom操作去加载css
- eslint-loader 通过eslint检查js代码


3. 常见的plugin

- define-plugin 定义环境变量
- commons-chunk-plugin 提取公共代码

4. loader、plugin

- 作用
  - loader译为加载器，webpack将一切文件视为模块，但是原生webpack只能解析js，而loader就是让webpack拥有加载和解析非js文件的能力
  - plugin译为插件，可以扩展webpack的功能，让webpack具有更多的灵活性，在wenpack运行的生命周期中会广播出许多时间，plugin可以监听这些时间，在合适的时机通过webpack提供的api改变输出结果

- 用法
  - loader在module.rules中配置，类型为数组，每一项都是一个Object，包括文件类型、加载loader、使用参数options
  - plugin在plugins中单独配置，类型为数组，每一项都是plugin实例，参数通过构造函数传入

5. loader编写思路

loader就是把读到的源文件内容转义成新的文件内容，并且每个loader通过链式操作，将源文件一步步翻译成想要的结果。

编写loader要遵循单一原则，每个loader只做一种转义工作，每个loader拿到源文件的内容source，可以通过返回值得方式将处理后的内容输出，也可以调用this.callback()方法，将内容返回给webpack。还可以通过this.async()生成一个callback函数，再用这个callback将处理后的内容输出出去。



6. 热更新原理
HMR(Hot Module Replacement)


7. 优化性能

- 压缩代码，删除多余代码(console.log)、注释、简化代码，压缩js、css
- cdn加速，将引起的静态资源路径换为cdn对应路径，使用webpack对于output参数和各loader的publicPath参数来修改资源路径
- 删除死代码(tree shaking)，将永远不会走到的代码删除掉，启动webpack时加--optimize-minimize参数实现


8. 提高webpack构建速度

- 多入口情况下，使用CommonsChunkPlugin来提取公共代码
- 通过externals配置来提取常用库
- 利用DllPlugin和DllReferencePlugin预编译资源模块，通过DllPlugin来对那些绝对不会修改的npm包进行预编译，再通过DllReferencePlugin将预编译的模块加载进来
- 使用Happypack实现多线程加速编译
- 使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度，原理上是采用了多核并行压缩提升速度
- 使用Tree-shaking和Scope Hoisting来剔除多余代码


9. 配置单页面、多页面

- 单页应用是webpack的标准模式，直接在entry中指定单页应用入口即可
- 多页应用可以使用webpack的AutoWebPlugin来完成自动化的构建，前提是项目的目录结构必须遵守预设规范
  - 每个页面都有公共代码，将这些代码抽离出来，避免重复加载，比如公共css
  - 让入口的配置足够灵活，避免添加新页面入口时需要修改构建配置

10. npm打包需要注意的点

- 要支持CommonJS模块化规范
- 打包结果为ES5编写，如果ES5是转换的，最好连同SourceMap一同上传
- npm包大小控制
- 不能将依赖模块一同打包，让用户自行选择安装

- 解决fangan
  - CommonJS模块化规范的解决方案：设置output.libraryTarget=commonjs2使输出的代码符合CommonJS2模块化规范
  - 输出ES5解决方案：使用babel-loader把ES6代码转换成ES5代码，再通过开启devtool:'source-map'输出SourceMap以发布调试
  - npm包大小控制：Babel在把ES6代码转换成ES5时会注入一些辅助函数，最终导致每个输出的文件中都包含这段辅助函数代码，造成代码冗余，解决方法是修改.babelrc文件，添加transfomr-runtime插件
  - 不能将依赖打包到npm：使用externals配置项来告诉webpack哪些模块不需要打包
  - 对依赖资源打包：通过css-loader和extract-text-webpack-plugin来实现
  

11. 按需加载

- Element和AntDesign中都有对应的babel-plugin-import插件，在.babelrc配置中或者babel-loader参数中设置

```json
{
  "presets": [["es2015", {"modules": false}]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

- 单页面应用中首次加载代码过多会导致首屏过慢，影响用户体验。通过使用import(*)语句来控制加载时机，webpack内置对于import(*)的解析，会将import(*)中引入的模块作为一个新的入口在生成一个chunk，当代吗执行到import(*)语句时，会去加载Chunk对应生成的文件。import(*)会返回一个Promise对象，为了让浏览器支持，需要事先注入Promise polyfill


### vite


### webpack和vite

- 区别
- 各自的优势


## git

## 算法

- 广度遍历
- 深度遍历
- 实际应用案例


## 项目


## 感谢

- 回流重绘相关文章
  - [我不是陈纪庚](https://segmentfault.com/a/1190000017329980)
  - [你滴止痛药儿](https://www.jianshu.com/p/e081f9aa03fb)
  - [anran758](https://zhuanlan.zhihu.com/p/82378692)
- webpack相关文章
  - [echo丶若梦](https://www.cnblogs.com/gaoht/p/11310365.html)