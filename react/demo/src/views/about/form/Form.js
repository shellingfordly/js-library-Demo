
import {Provider} from './formContext'

export default function Form(props){
  const {children, form}= props

  function onSubmit(e){
    console.log(1);
  }

  return (
    <form onSubmit={onSubmit}>
      <Provider value={form}>
        {children}    
      </Provider>
    </form>
  )
}