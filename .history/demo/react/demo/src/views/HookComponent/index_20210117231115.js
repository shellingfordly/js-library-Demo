
import { UseMemoComponent, UseFunComponent } from './components/useMemo'

export default function HookComponent() {
  return (
    <div>
      <div className="b-line">
        <p>useMemo: </p>
        <UseMemoComponent />
        <UseFunComponent />
      </div>
    </div>
  )
}