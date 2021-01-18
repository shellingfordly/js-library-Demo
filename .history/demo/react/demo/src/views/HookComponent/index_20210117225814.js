
import { UseMemoComponent, UseFunComponent } from './components/useMemo'

export default function HookComponent() {
  return (
    <div>
      <div className="b-line">
        <p>useMemo: </p>
        使用：<UseMemoComponent />
        未使用：<UseFunComponent />
      </div>
      <hr />
    </div>
  )
}