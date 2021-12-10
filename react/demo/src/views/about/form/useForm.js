import React from 'react'

class FormStore {
  constructor(props) {
    this.store = {}
    this.fieldEntities = []
  }

  registerField = (field)=> {
    this.fieldEntities.push(field)
  }

  getFieldValue = (name) => {
    return this.store[name]
  }

  setFieldValue = (newVal) => {
    this.store = {
      ...this.store,
      ...newVal
    }
    this.fieldEntities.forEach(entity=>{
      entity.onStoreChange()
    })
  }
}


export default function useForm() {
  const formRef = React.useRef()

  if (!formRef.current) {
    formRef.current = new FormStore()
  }


  return [formRef.current]
}