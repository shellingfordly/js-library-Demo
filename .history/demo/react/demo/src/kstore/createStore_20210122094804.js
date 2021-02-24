export function createStore(reducer){

  let currentState = null
  const currentListeners = []

  function getState(){
    return currentState
  }

  function dispatch(action){
    currentState = reducer(currentState, action)


  }

  function subscribe(listener){
    currentListeners.push(listener)
  }
  
  return {
    getState,
    dispatch,
    subscribe
  }

}