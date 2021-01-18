
import { UseMemoComponent } from './components/useMemo'

export default function HookComponent() {
  return (
    <div>
      <div className="b-line">
        <p>useMemo: </p>
        <UseMemoComponent />
      </div>
    </div>
  )
}