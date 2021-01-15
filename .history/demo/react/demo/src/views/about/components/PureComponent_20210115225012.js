import { PureComponent } from 'react'

export default class OptimizationComponent extends PureComponent {

  state = { count: 0 }

  add = () => {
    console.log();
    this.setState({
      count: 100
    })
  }
  render() {
    return (
      <div>

        <button onClick={this.add}>count: {this.count}</button>
      </div>
    )
  }

}