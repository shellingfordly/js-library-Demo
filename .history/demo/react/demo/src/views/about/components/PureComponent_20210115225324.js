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

  // shouldComponentUpdate(oldVal, newVal){

  //   console.log(oldVal, newVal);

  // }


  render() {
    return (
      <div>

        <button onClick={this.add}>count: {this.state.count}</button>
      </div>
    )
  }

}