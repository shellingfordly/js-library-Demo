import { useState } from 'react'

function User() {
  const [{ name, age, }, setValue] = useState({ name: '测试', age: 11 })
  const [isShow, setIsShow] = useState(true)
  function hanldeClick() {
    setIsShow(!isShow)
  }
  function changeName(e) {
    setValue({ name: e.target.value, age })
    console.log(name, age);
  }
  function changeAge(e) {
    setValue({ name, age: e.target.value })
    console.log(name, age);
  }
  return (
    <div style={{width: 300}}>
      <h3>修改用户信息</h3>
      <p style={{color: '#ddd'}}>使用useState hook函数</p>
      <button onClick={hanldeClick}>{isShow ? '修改' : '保存'}</button>
      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
      </div>
      <div style={{ display: isShow && 'none' }}>
        <p>
          name: <input type='text' value={name} onChange={changeName}></input>
        </p>
        <p>
          age: <input type='text' value={age} onChange={changeAge}></input>
        </p>
      </div>
    </div>
  )
}

export default User;