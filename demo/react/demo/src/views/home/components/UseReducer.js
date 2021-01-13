
import {  useReducer } from 'react'

const state = 0

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + action.data
    case 'minus':
      return state - action.data
    default:
      return state
  }
}

export default function SetTimeout() {

  const [count, dispatch] = useReducer(reducer,state)

  function add(){
    dispatch({type: 'add', data: 1})
  }
  function minus(){
    dispatch({type: 'minus', data: 1})
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  );
}

