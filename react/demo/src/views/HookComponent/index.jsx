
import UseMemoComponent from './components/useMemo'
import UseCallbackComponent from './components/useCallback'

export default function HookComponent() {
  return (
    <div>
      <div className="b-line">
        <h2>useMemo: </h2>
        <UseMemoComponent />
        <p>useCallback:</p>
        <UseCallbackComponent />
      </div>
    </div>
  )
}