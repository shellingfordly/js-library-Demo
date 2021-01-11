export function saveUser(data){
  return {
    type: 'SAVE',
    data
  }
}

export function getUser(data){
  return {
    type: 'GET',
    data
  }
}

export function userLogin(){
  return {
    type: 'LOGIN',
  }
}

export function userLogout(){
  return {
    type: 'LOGOUT',
  }
}