import React, { useEffect } from "react";
import Component from "../../utils/react-copy/React-Component";
import { render } from "../../utils/react-copy/react-render";

// 函数组件
function FucCompoent(props) {
  return <div>{props.name} is a function component</div>;
}

// 类组件
class ClassComponent extends Component {
  render() {
    return <div>{this.props.name} is a class component</div>;
  }
}

export default function ReactRender() {
  const jsx = (
    <div className="div">
      <span className="span">TestComponent</span>
      <FucCompoent name="FucCompoent" />
      <ClassComponent name="ClassComponent" />
    </div>
  );

  // 将jsx 渲染为真实的 dom节点
  const dom = render(jsx);
  const ref = React.createRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.appendChild(dom);
    }
  }, []);

  return (
    <div ref={ref}>
      <h2>ReactRender: </h2>
    </div>
  );
}
