
import { useState } from 'react'
import { UseMemoComponent, UseFunComponent } from './components/useMemo'

export default function HookComponent() {
  const [len] = useState(5)
  return (
    <div>
      <div className="b-line">
        <p>useMemo: </p>
        使用：<UseMemoComponent len={len} />
        未使用：<UseFunComponent len={len} />
      </div>
    </div>
  )
}