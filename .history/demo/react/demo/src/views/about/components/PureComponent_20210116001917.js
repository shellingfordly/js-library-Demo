// import { PureComponent } from 'react'
import { Component } from 'react'

export default class OptimizationComponent extends Component {
  state = { count: 0 }
  

  add = () => {
    this.setState({
      count: 100
    }, () => {
      console.log('count:', this.state.count);
    })
  }

  shouldComponentUpdate(oldVal,newVal){
    console.log(oldVal, newVal);
    return true
  }

  render() {
    console.log('render');

    const {count} = this.state
    return (
      <div>

        <button onClick={this.add}>count: {count}</button>
      </div>
    )
  }

}