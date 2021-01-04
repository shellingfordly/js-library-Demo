# react

标签（空格分隔）： 前端学习

---

## 声明周期

## setState

- 异步

- 每次取到的值都是老的值

```js
this.setState({
    count: this.state.count+1
})
this.setState({
    count: this.state.count+1
})
```

- 每次获取到的都是最新值

```js
this.setState(state=>{
    return {count: state.count+1}
})
this.setState(state=>{
    return {count: state.count+1}
})
```

- 改变的属性和改变前没有关系则使用对象，有关系则使用函数形式更好

> 官方说明：

1. updater 函数中接收的 state 和 props 都保证为最新。updater 的返回值会与 state 进行浅合并。

2. setState()的第二个参数为可选的回调函数，它将在 setState 完成合并并重新渲染组件后执行。通常，我们建议使用 componentDidUpdate() 来代替此方式。

- 在原生的事件函数/Promise/setTimeOut中，setState是同步的，并且不会合并处理

## key

- 没有key值时将会原地复用
-<span style="color: red">vue有没有这个问题？</span>

## 组件通信

### 父子通信

- props

```jsx
class Parent extends React.Component{
    xxx = ()=>{
        console.log("父组件函数")
    }
    <div>
        // 父传子
        <Son xxx={this.xxx} />
    </div>
}

class Son extends React.Component{
    state = { msg: '子组件数据' }
    
    sendmsg = ()=>{
        // 子穿父
        this.props.xxx(this.state.msg)
    }
    <div>
        <button onClick={this.sendmsg}>点击</button>
    </div>
}
```

### 兄弟组件通信

- PubSub

```jsx
class Parent extends React.Component{
    xxx = ()=>{
        console.log("父组件函数")
    }
    <div>
        <Son1 xxx={this.xxx} />
        <Son2 xxx={this.xxx} />
    </div>
}

class Son1 extends React.Component{
    state = { msg: 'son1组件数据' }
    sendmsg = (){
        PubSub.publish('xxx', this.state.msg) // 触发xxx事件
    }
    <div>
        <button onClick={this.sendmsg}>点击</button>
    </div>
}

class Son2 extends React.Component{
    componentDidMount(){
        PubSub.subscribe('xxx', (msg)=>{ // 订阅xxx事件
            console.log(msg)
        })
    }
    <div>
        <button onClick={this.sendmsg}>点击</button>
    </div>
}
```

## CSSTransition

- timeout 动画执行时间，毫秒数
- className 修改类名
- appear 第一次是否触发
- in
- onEnter 入场时触发回调
- onEntering 入场中触发回调
- onEntered 入场结束时触发回调
- onExit 退场时触发回调
- onExiting 退场中触发回调
- onExited 退场结束时触发回调

### css类名

- .enter 动画刚入场时
- .enter-active 动画入场中
- .enter-done 动画入场结束时
- .exit 动画刚退场时
- .exit-active 动画退场中
- .exit-done 动画退场结束时

### TransitionGroup

```jsx
<TransitionGroup>
    <CSSTransition></CSSTransition>
    <CSSTransition></CSSTransition>
</TransitionGroup>
```

## 脚手架

## 路由

- 路由组件中的props下存在的属性
  - history 存放跳转路径的方法
  - location 存放数据
  - match 解析路径得到的数据

### NavLink和Route

- 默认是模糊匹配
- 加上exact精准匹配

```jsx
<NavLink to='/home'>首页</NavLink>
// /home会匹配/和/home
<Route path="/home" component={Home}></Route>
<Route path="/" component={Root}></Route>
```

- Switch中的Route都是精准匹配
- '/home'将无法匹配到'/'

```jsx
<NavLink to='/home'>首页</NavLink>
<Switch>
  <Route path="/home" component={Home}></Route>
  <Route path="/" component={Root}></Route>
</Switch>
```

### Redirect

- 路径的重定向
- 当前路径匹配不到时走Redirect设置的路径

```jsx
<NavLink to='/home'>首页</NavLink>
<Switch>
  <Route path="/home" component={Home}></Route>
  <Route path="/" component={Root}></Route>
  <Redirect to="/home"></Redirect>
</Switch>
```

### history

- this.props.history.push
- this.props.history.replace
- goForward 前进到回到刚才回退前的路径
- goBack 返回历史记录中的上一个路径
- go(num) 前进num次回退历史记录的路径

#### push

push跳转路径是在原来的历史记录中叠加，回退时能回到push前的路径

#### replace

replace跳转路径是替换当前的路径，上一次的路径直接被覆盖，无法回退到replac前的路径

## Redux

- store.js
  - createStore 创建仓库
  - applyMiddleware 使用中间件
  - thunk 异步处理事件

```js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
export default createStore(reducer, applyMiddleware(thunk))
```

- reducer.js

```js
export default function (state = 0, action){
  switch(action.type) {
    case 'ADD': return state + action.data
    default return state
  }
}
```

- action.js
  - dispatch 发起动作
  - 同步动作返回对象
  - 异步动作返回函数
    - dispatch为thunk中间件默认传入
    - 在返回的函数中做异步请求

```js
export function addAtion (value) => { type: 'ADD', data: velue }
export function addAsyncAtion (value) {
  return dispatch => {
    setTimeout(()=>{
      dispatch(addAtion(value))
    }, 2000)
  }
}
```
