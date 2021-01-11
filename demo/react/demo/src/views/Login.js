import { Component } from "react"
import store from '../store'
import { saveUser,userLogin } from '../store/actions'

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  changeUser = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changePass = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    store.dispatch(saveUser(this.state))
    store.dispatch(userLogin())
    this.props.history.push('/home')
  }

  render() {
    const { username, password } = this.state
    return (
      <div className="login">
        <div>
          <div className="label">用户名:</div>
          <input value={username} onChange={this.changeUser} type="text"></input>
        </div>
        <div>
          <div className="label">密码:</div>
          <input value={password} onChange={this.changePass} type="password"></input>
        </div>
        <div className="btn">
          <button onClick={this.login}>登录</button>
          <button onClick={this.login}>注册</button>
        </div>
      </div>
    )
  }
};
