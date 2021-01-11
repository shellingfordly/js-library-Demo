import { useEffect, useState } from 'react'
function Register() {
  let [ count, setCount ] = useState(0)

  useEffect(()=>{
    console.log('count: ', count)
  })

  function add(){
    setCount(++count)
  }
  
  return (
    <div className="register">
      <p style={{color: '#ddd'}}>使用useEffect hook函数</p>
      <p>count：{count}</p>
      <button onClick={add}>点击</button>
    </div>
  );
}


export default Register;
