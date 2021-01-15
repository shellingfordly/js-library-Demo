import { cloneElement, Component } from 'react'
import { Context } from './formContext'
export default class Field extends Component {

  static contextType = Context

  componentDidMount() {
    const { registerField } = this.context
    registerField(this)
  }

  onStoreChange = () => {
    this.forceUpdate()
  }

  getControlled = () => {
    const { getFieldValue, setFieldValue } = this.context
    const { name } = this.props
    return {
      value: getFieldValue(name),
      onChange: e => {
        const newVal = e.target.value
        setFieldValue({
          [name]: newVal
        })
      }
    }
  }

  render() {
    const { children, } = this.props
    return (
      <div>
        Filed:
        { cloneElement(children, this.getControlled())}
      </div >
    )
  }
}