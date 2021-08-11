
function fn(...arr) {
  console.log(arr);
}

fn(1, 2, 3, 4)

const obj1 = {
  a: 1,
  b: 2
}

let person = {
  name: 'Matt',
  age: 27,
  job: {
    title: 'Software engineer'
  }
};
let { job: { title } } = person;
// console.log(title);

const reg = /(\d{3})(\d{2})(\d*)(\d{4})/
let phoneNum = "15612345678"
const res = phoneNum.replace(reg, '$1****$2****$3****$4')
console.log(res)