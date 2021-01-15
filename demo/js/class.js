
class Test {
  fn(){
    this.fn1()
  }
  fn1(){
    console.log('fn1')
  }
}

const a = new Test()

function fn(){
  
  console.log([...arguments]);
}
fn(1,2,3,4)

function add() {
  const data = [...arguments];
  return data.reduce((pre, next) => Number(pre) + Number(next));
}
const res =add('1','2',3)
console.log(res);