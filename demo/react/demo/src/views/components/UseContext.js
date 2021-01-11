
import { useContext } from 'react'
import { Context } from '../Home'

export default function UseContext() {
  const data  = useContext(Context)
  console.log(data);
  return <div>
    <p>UseContext组件中接收数据</p>
    <p>{data}</p>
  </div>;
}

