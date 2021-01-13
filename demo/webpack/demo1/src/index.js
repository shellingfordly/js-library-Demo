import './js/a'
import './js/b'
// import clickSync from './js/click'
// const clickPromise = import('./js/click')
const { default: clickRequire } = require('./js/click')

const fn = ()=>{
  console.log('箭头函数fn');
}
fn()

const arr = [1,2,3]

const arr1 = [...arr]

console.log(arr,arr1);
// console.log('import同步引入',clickSync());
// console.log('import异步引入',clickPromise);
console.log('require引入',clickRequire);


window.addEventListener('click',async ()=>{
  // const { default: clickFn } = await clickPromise
  // clickFn()
})
