
import {useFunComponent,} from './components/useMemo'

export default function HookComponent(){
  return (
    <div>
      使用useMemo：<useMemoComponent />
      <hr/>
      {/* 未使用：<useFunComponent/> */}
    </div>
  )
}