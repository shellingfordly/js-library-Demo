
import { useContext } from 'react'
import { Context } from '../../hook/context'

export default function UseContext() {
  const data = useContext(Context)
  return <div>
    useContext接收数据----{data}
  </div>;
}

