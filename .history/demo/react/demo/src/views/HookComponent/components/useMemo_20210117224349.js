import {useMemo, useState} from 'react'

export function  useFunComponent (){
  function sum(){
    console.log("computed");
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

  const [len] = useState(5)
  
  const sum =  useMemo(()=>{
    console.log("computed");
    let count = 0
    for (let i = 0; i < len; i++) {
      count+=i
    }
    return count
  }, [len])
  
  return (
    <div>
      {sum()}
    </div>
  )
}