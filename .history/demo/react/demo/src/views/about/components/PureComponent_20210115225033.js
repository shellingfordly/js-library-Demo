import { PureComponent } from 'react'

export default class OptimizationComponent extends PureComponent {

  state = { count: 0 }

  add = () => {
    this.setState({
      count: 100
    })
    console.log('count:',this.state.count);
  }
  render() {
    return (
      <div>

        <button onClick={this.add}>count: {this.count}</button>
      </div>
    )
  }

}