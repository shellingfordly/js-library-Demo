import {PureComponent} from 'react'

export class Component extends PureComponent{
   count = 0 

  render(){
    return (
      <div>
        <button>count: {this.count}</button>
      </div>
    )
  }

}