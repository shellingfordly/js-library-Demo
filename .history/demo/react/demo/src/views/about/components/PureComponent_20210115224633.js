import {PureComponent} from 'react'

export class Component extends PureComponent{
   count = 0 

   add = ()=>{
    //  this.count = 100
   }
  render(){
    return (
      <div>
        
        <button onClick={this.add}>count: {this.count}</button>
      </div>
    )
  }

}