const user_info = {
  username: '',
  password: '',
}

export function user(state = user_info, actions) {
  switch (actions.type) {
    case "SAVE":
      localStorage.setItem('user_info', JSON.stringify(actions.data))
      return { status: true, msg: '登录成功！' }
    case "GET":
      const hasUser = localStorage.getItem('user_info')
      if (hasUser) return { status: true, data: user, msg: '已登录！' }
      else return { status: false, msg: '未登录！' }
    default: return state
  }
}


export function isLogin(state = false, actions) {
  const hasUser = localStorage.getItem('user_info')
  switch (actions.type) {
    case "LOGIN":
      if (hasUser) return true
      else return false
    case "LOGOUT":
      if (hasUser) localStorage.removeItem('user_info')
      return false
    default: return state
  }
}