const map = new Map()
const obj = {}
let mapVal = 0
let objVal = 0
const count = 2 ** 20

console.time('map set')
for (let index = 0; index < count; index++) {
  map[index] = index
}
console.timeEnd('map set')

console.time('obj set')
for (let index = 0; index < count; index++) {
  obj[index] = index
}
console.timeEnd('obj set')


console.time('map get')
for (let index = 0; index < count; index++) {
  mapVal = map.get(index)
}
console.timeEnd('map get')

console.time('obj for in get')
for (let index in obj) {
  objVal = obj[index]
}
console.timeEnd('obj for in get')

console.time('obj get')
for (let index = 0; index < count; index++) {
  objVal = obj[index]
}
console.timeEnd('obj get')