import { PureComponent } from 'react'

export default class OptimizationComponent extends PureComponent {

  constructor() {
    super()
    this.state = { count: 0 }
  }

  add = () => {
    this.setState({
      count: 100
    }, () => {
      console.log('count:', this.state.count);
    })
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