export default function RcForm(props){
  return function (Comp){
    return (
      <Comp {...props} />
    )
  }
}