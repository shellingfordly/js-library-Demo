
import { Component } from "react";
import { Context } from '../../hook/context'

export default class UseContext extends Component {
  static contextType = Context

  render() {
    return (
      <div>
        contextType接收数据 ---- {this.context}
      </div>
    )
  }
}

