# vue

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


