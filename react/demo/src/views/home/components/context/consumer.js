
import { Consumer } from '../../hook/context'
export default function ContextConsumer() {
  return <div>
    <Consumer>
      {data => <span>Consumer接收数据 ----{data}</span>}
    </Consumer>
  </div>;
}

