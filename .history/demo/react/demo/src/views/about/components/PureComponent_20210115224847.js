import {PureComponent} from 'react'

export default class OptimizationComponent extends PureComponent{
   count = 0 

   add = ()=>{
     console.log();
     this.count = 100
   }
  render(){
    return (
      <div>
        
        <button onClick={this.add}>count: {this.count}</button>
      </div>
    )
  }

}