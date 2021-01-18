
import './App.scss'
import { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/home/Home'
import About from './views/about/About'
import Register from './views/Register'
import User from './views/User'
import Login from './views/Login'
import store from './store'
import { userLogout } from './store/actions'
import Hook from './views/HookComponent'

export default class App extends Component {

  state = {
    isShow: false
  }

  componentDidMount() {
    store.subscribe(() => {
      const data = store.getState()
      this.setState({ isShow: data.isLogin })
    })
  }

  logout = () => {
    store.dispatch(userLogout())
  }

  
  render() {

    return (
      <div className="app">
        <div className="nav">
          <ul>
            <li>

          <NavLink to='/home'>首页</NavLink>
            </li>
          </ul>
          
          <NavLink to='/home'>首页</NavLink>
          <NavLink to='/user'>用户</NavLink>
          <NavLink to='/about'>关于我</NavLink>
          <NavLink to='/register'>注册</NavLink>
          <NavLink to='/login'>登录</NavLink>
          <NavLink to='/hook'>Hook</NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/hook" component={Hook}></Route>
            <Redirect to="/login"></Redirect>
          </Switch>
        </div>
      </div>


    )
  }
};
