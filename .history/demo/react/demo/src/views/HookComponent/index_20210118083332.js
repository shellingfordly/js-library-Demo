
import UseMemoComponent from './components/useMemo'
import UseCallbackComponent from './components/useMemo'

export default function HookComponent() {
  return (
    <div>
      <div className="b-line">
        <p>useMemo: </p>
        <UseMemoComponent />
        <p>useCallback:</p>
        <UseCallbackComponent />
      </div>
    </div>
  )
}