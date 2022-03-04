import { createRef, forwardRef } from "react";

// 使用 forwardRef 传递ref 获取子组件内部的 dom 元素

const FancyButton = forwardRef(function (props, ref) {
  function onClickRef() {
    console.log(ref);
  }

  return (
    <button ref={ref} onClick={onClickRef}>
      {props.children}
    </button>
  );
});

function PropsButton({ children, reff }) {
  function onClickRef() {
    console.log(reff);
  }
  
  return (
    <button ref={reff} onClick={onClickRef}>
      {children}
    </button>
  );
}

export default function RefPage() {
  const ref1 = createRef();
  const ref2 = createRef();

  function onClick() {
    const color = () => "#" + Math.random().toString(16).slice(2, 8);
    ref1.current.style.color = color()
    ref2.current.style.color = color()
  }
  
  return (
    <>
      <h2>RefPage: </h2>
      <FancyButton ref={ref1}>FancyButton</FancyButton>
      {/* 传递一个非 ref 属性的变量也可以实现获取子组件内部的 dom 元素 */}
      <PropsButton reff={ref2}>PropsButton</PropsButton>
      <button onClick={onClick}>onClick</button>
    </>
  );
}
