/**
 *  2**i  3**j
 *  i  log2(3**j)
 * Math.log(2)
 * 
*/

function fn1() {
  class Num {
    base = 0
    exp = 0

    constructor(base, exp) {
      this.base = base
      this.exp = exp
    }
  }

  const obj = {}
  for (let index = 0; index < 100; index++) {
    const num2 = new Num()
    const num3 = 3 ** index
    const num5 = 5 ** index

    obj[num2] = num2
    obj[num3] = num3
    obj[num5] = num5
  }

  console.log(Object.values(obj))

}


const arr = [2,3,1,2,4,3]


function fn2(sum, arr) {
  const obj = {}
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    if (value >= sum) return [{ index, value }]
    if (!obj[value]) {
      obj[sum - value] = { index, value }
    } else {
      return [{ index, value }, obj[value]]
    }
  }
  for (const key in obj) {
    if (Reflect.has(obj, key)) {
      const item = obj[key];
      const arr1 = [...arr]
      arr1.splice(item.index, 1)
      const res = fn2(key, arr1)
      return [...res, item]
    }
  }
}

console.log(fn2(5, arr));
console.log(fn2(7, arr));
console.log(fn2(10, arr));
console.log(fn2(14, arr));