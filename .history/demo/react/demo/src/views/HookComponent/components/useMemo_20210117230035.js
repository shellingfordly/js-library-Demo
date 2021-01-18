import {useMemo} from 'react'

export function  UseFunComponent (props){
  function sum(){
    console.log("computed");
    let count = 0
    for (let i = 0; i < props.len; i++) {
      count+=i
    }
    return count
  }
  
  return (
    <span>
      {sum()}
    </span>
  )
}

export function  UseMemoComponent (props){
  const sum =  useMemo(()=>{
    console.log("computed");
    let count = 0
    for (let i = 0; i < props.len; i++) {
      count+=i
    }
    return count
  }, [len])
  
  return (
    <span>
      {sum}
    </span>
  )
}