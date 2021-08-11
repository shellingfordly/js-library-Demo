function look(obj, key) {
  if (typeof obj !== 'object') return obj
  const list = key.split('.')
  return look(obj[list.shift()], list.join(''))
}

console.log(look({ a: { b: 1 } }, 'a.b'))