
import { UseMemoComponent,UseFunComponent} from './components/useMemo'

export default function HookComponent(){
  return (
    <div>
      useMemo: 
      使用useMemo：<UseMemoComponent />
      未使用useMemo：<UseFunComponent/>
      <hr/>
    </div>
  )
}