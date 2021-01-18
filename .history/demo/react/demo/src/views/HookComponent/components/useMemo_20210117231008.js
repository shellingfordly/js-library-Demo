import { useMemo, useState } from 'react'

export function UseFunComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  function sum() {
    console.log("UseFunComponent");
    let count = 0
    for (let i = 1; i <= len; i++) {
      count++
    }
    return count
  }

  return (
    <div>
      UseFunComponent:
      与len无关的数据：{{ other }} ； 与len有关的数据： {sum()}
      <button onClick={() => { setOther(other++) }}>改变与len无关的数据</button>
      <button onClick={() => { setLen(len++) }}>改变与len有关的数据</button>
    </div>
  )
}

export function UseMemoComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  const sum = useMemo(() => {
    console.log("UseMemoComponent");
    let count = 0
    for (let i = 1; i <= len; i++) {
      count++
    }
    return count
  }, [len])

  return (
    <div>
      与len无关的数据：{{ other }} ； 与len有关的数据： {sum}
      <button onClick={() => { setOther(other++) }}>改变与len无关的数据</button>
      <button onClick={() => { setLen(len++) }}>改变与len有关的数据</button>
    </div>
  )
}