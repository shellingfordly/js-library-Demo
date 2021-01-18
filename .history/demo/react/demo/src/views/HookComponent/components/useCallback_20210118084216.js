import { PureComponent, useCallback, useState } from 'react'

export default function UseCallbackComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  function addLen() {
    setLen(len++)
  }

  const addOther = useCallback(() => {
    setOther(other++)
  }, [other])

  return (
    <div>
      <p>len：{len} </p>
      <p>other：{other} </p>
      <button onClick={addLen}>改变len</button>
      <button onClick={() => { setOther(len++) }}>改变与other</button>
      <Child  addOther={addOther} />
    </div>
  )
}

class Child extends PureComponent {
  render() {
    console.log("child");
    const {  addOther } = this.props
    return (
      <div>
        {/* <button onClick={addLen}>Child-改变len</button> */}
        <button onClick={addOther}>Child-改变addOther</button>
      </div>
    )
  }
}