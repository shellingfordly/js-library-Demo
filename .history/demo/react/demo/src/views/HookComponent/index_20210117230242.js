
import { useState } from 'react'
import { UseMemoComponent, UseFunComponent } from './components/useMemo'

export default function HookComponent() {
  const [len, setLen] = useState(5)
  return (
    <div>
      <div className="b-line">
        <p>useMemo: </p>
        使用：<UseMemoComponent len={len} />
        未使用：<UseFunComponent len={len} />
        <button onClick={()=>{setLen(len++)}}>点击改变len</button>
      </div>
    </div>
  )
}