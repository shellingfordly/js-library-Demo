
import {useFunComponent, useMemoComponent} from './components/useMemo'

export default function HookComponent(){
  return (
    <div>
      <useMemoComponent />
      <hr/>
      <useFunComponent/>
    </div>
  )
}