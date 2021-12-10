const dom = h('div', {}, [
  h('p', {}, 'Web前端'),
  h('ul', {}, [
    h('li', {}, 'HTML'),
    h('li', {}, 'CSS'),
    h('li', {}, 'JS')
  ]),
  h('h1', {}, 'Vue'),
  h('h1', {}, h('span', {}, 'React')),
])
console.log(dom)

function h(sel, data, c) {
  if (arguments.length !== 3) {
    throw "参数不对！"
  }
  if (typeof c !== 'object') {
    return vnode(sel, data, c, undefined, undefined)
  } else if (Array.isArray(c)) {
    const children = []
    for (let i = 0; i < c.length; i++) {
      const node = c[i];
      children.push(node)
    }
    return vnode(sel, data, children, undefined, undefined)
  } else if (toString.call(c) === '[object Object]') {
    return vnode(sel, data, c)
  }
}

function vnode(sel, data, children, text, elm) {
  return {
    sel, data, children, text, elm
  }
}