// import {useMemo} from 'react'

export function  useFunComponent (){
  function sum(){
    let count = 0
    for (let i = 0; i < 5; i++) {
      count+=i
    }
    return count
  }
  
  return (
    <div>
      {sum()}
    </div>
  )
}

export function  useMemoComponent (){
  function sum(){
    let count = 0
    for (let i = 0; i < 5; i++) {
      count+=i
    }
    return count
  }
  
  return (
    <div>
      {sum()}
    </div>
  )
}