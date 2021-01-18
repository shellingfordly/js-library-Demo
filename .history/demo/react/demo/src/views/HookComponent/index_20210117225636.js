
import { UseMemoComponent,UseFunComponent} from './components/useMemo'

export default function HookComponent(){
  return (
    <div>
      使用useMemo：<UseMemoComponent />
      <hr/>
      未使用useMemo：<UseFunComponent/>
    </div>
  )
}