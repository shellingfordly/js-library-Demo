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

  shouldComponentUpdate(_, nextState) {
    return nextState.count !== this.state.count
  }

  render() {
    console.log('render');

    const { count } = this.state
    return (
      <div>

        <button onClick={this.add}>count: {count}</button>
      </div>
    )
  }

}