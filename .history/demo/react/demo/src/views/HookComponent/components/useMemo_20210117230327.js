import {useMemo} from 'react'

export function  UseFunComponent (props){
  function sum(){
    console.log("UseFunComponent");
    let count = 0
    for (let i = 1; i <= props.len; i++) {
      count++
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
    for (let i = 1; i <= props.len; i++) {
      count++
    }
    return count
  }, [props.len])
  
  return (
    <span>
      {sum}
    </span>
  )
}