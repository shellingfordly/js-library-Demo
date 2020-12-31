# vue

## 设计原则

- 渐进式JS框架
- 易用、灵活、高效

### 易用性

### 灵活性

### 高效性

- 虚拟dom
- diff算法

## vue中key

- 确定唯一的dom元素

- 首位判断假猜策略

key的作用是为了高效的更新虚拟DOM，其原理是vue在patch过程中通过key可以精准判断两个节点是否是同一个，从而避免频繁更新不同元素，减少dom操作，提高性能；
并且没有key值可能会在列表更新时引发一些隐藏bug；
在使用相同标签元素的过度切换时，也会用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果

## 性能优化

### 路由懒加载

```js
const router = new VueRouter({
  routes:[
    {path: '/foo/', component: ()=>import('./Foo.vue')}
  ]
})
```

### keep-alive缓存页面

```html
<keep-alive>
  <router-view />
</keep-alive>
```

### 使用v-show复用DOM

### v-for和v-if

> 源码compiler/codegen/index.js

- v-for优先于v-if
- 同时出现时，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能

- 避免这种情况
  - 先v-if在做循环
  - 如果是v-for内部的组件需要判断v-if，则可以先处理数据，在给template循环

### 长列表

- 存粹的数据展示，使用Object.freeze冻结数据

- 虚拟滚动
  - vue-virtual-scroller
  - vue-virtual-scroll-list

```html
<recycle-scroller>
</recycle-scroller>
```

### 事件销毁

- 消除定时器

### 图片懒加载

- vue-lazyload

### 第三方组件按需引入

### 无状态组件

- 函数式组件

```html
<template functional>
</template>
```

### 子组件分割

- 更新频繁的组件拆分出去，更新时只更新自己的状态

### 变量的本地化

- 外部传入的数据，在自组件中使用变量接收，不会频繁的取去引用props计算属性

### SSR

----

## vue3

### 新特性

- 更快
  - 虚拟DOM重写
  - 优化slots的生成
  - 静态树提升
  - 静态属性提升
  - 基于proxy响应式
- 更小
  - 通过摇树优化核心库体积
- 更容易维护
  - ts + 模块化
- 更友好
  - 跨平台： 编译器和运行时核心与平台无关，使vue更容易与任何平台（Web、Android、Ios）一起使用
- 更容易使用
  - ts
  - 更好的调试支持
  - 独立的响应式模块
  - Composition API
    - 逻辑复用

### 虚拟DOM重写
