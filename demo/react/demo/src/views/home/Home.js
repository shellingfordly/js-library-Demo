
import UseReducer from './components/UseReducer'
import SetTimeout from './components/SetTimeout'

import UseContext from './components/context/useContext'
import ContextType from './components/context/contextType'
import Consumer from './components/context/consumer'
import { Provider } from './hook/context'
import HighComponent from './utils/highComponent'

const HighUseReducer = HighComponent(UseReducer)

export default function Home() {
  const data = 'home组件的数据'

  return <div>
    <div>
      UseReducer应用：
      <UseReducer />
    </div>
    <hr />
    <div>
      HighUseReducer:
      <HighUseReducer />
    </div>
    <hr />
    <div>
      useEffect应用：
      <SetTimeout />
    </div>
    <hr />
    <p>Context应用：</p>
    <Provider value={data} >
      <UseContext />
      <ContextType/>
      <Consumer/>
    </Provider>
  </div>;
}

