export default function HighComponent(BaseComponent) {
  return function (props){
    return (
      <div>
        <p>高阶组件装饰</p>
        <BaseComponent {...props} />
      </div>
    );
  }
}