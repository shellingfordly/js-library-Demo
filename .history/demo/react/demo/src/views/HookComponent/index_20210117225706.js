
import { UseMemoComponent,UseFunComponent} from './components/useMemo'

export default function HookComponent(){
  return (
    <div>
      <p>useMemo: </p>
      使用：<UseMemoComponent />
      未使用：<UseFunComponent/>
      <hr/>
    </div>
  )
}