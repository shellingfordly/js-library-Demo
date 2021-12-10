import vnode from './vnode'
export default function h(sel, data, c) {
  if (arguments.length !== 3) {
    throw "参数不对！"
  }
  if (typeof c !== 'object') {
    return vnode(sel, data, c, undefined, undefined)
  } else if (Array.isArray(c)) {
    const children = []
    for (let i = 0; i < c.length; i++) {
      const node = c[i];
      children(node)
    }
    return vnode(sel, data, children, undefined, undefined)
  } else if (Array.call(c) === '[object object]') {

  }
}