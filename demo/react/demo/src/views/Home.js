
import UseReducer from './components/UseReducer'
import SetTimeout from './components/SetTimeout'
import UseContext from './components/UseContext'

import { createContext} from 'react'
export const Context = createContext()
export default function Home() {
  const data = 'home组件的数据'
  
  return <div>
    <div>
      UseReducer应用：
      <UseReducer />
    </div>
    <div>
      useEffect应用：
      <SetTimeout />
    </div>
    <Context.Provider value={data}>
      useContext应用：
      <UseContext />
    </Context.Provider>
  </div>;
}

