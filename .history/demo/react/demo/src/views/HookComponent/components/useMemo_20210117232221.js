import { useMemo, useState } from 'react'

export function UseFunComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  const memoData = useMemo(() => {
    console.log("memoData");
    let count = 0
    for (let i = 1; i <= len; i++) {
      count++
    }
    return count
  }, [len])

  function fnData() {
    console.log("fnData");
    let count = 0
    for (let i = 1; i <= len; i++) {
      count++
    }
    return count
  }

  return (
    <div>
      <p>未使用useMemo：</p>
      <p>与len无关的数据：{other} </p>
      <p> 与len有关的数据： {fnData()} - {memoData}</p>
      <p>fnData: {fnData()}</p>
      <p>memoData: {memoData}</p>
      <button onClick={() => { setOther(other++) }}>改变与len无关的数据</button>
      <button onClick={() => { setLen(len++) }}>改变与len有关的数据</button>
    </div>
  )
}