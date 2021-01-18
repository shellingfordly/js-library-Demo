import { useMemo, useState } from 'react'

export default function UseMemoComponent() {
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
      <p>len：{len} </p>
      <p>other：{other} </p>
      <button onClick={() => { setOther(other++) }}>改变len</button>
      <button onClick={() => { setLen(len++) }}>改变与other</button>
      <Child />
    </div>
  )
}

function Child(){
  return (
    <div>
      button
    </div>
  )
}