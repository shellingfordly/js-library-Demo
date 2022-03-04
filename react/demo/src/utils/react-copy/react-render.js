// 渲染函数
export function render(vnode) {
  const { type } = vnode;
  if (typeof type === "string") {
    return createDomNode(vnode);
  } else if (typeof type === "function") {
    if (type.prototype.isReactComponent) {
      return createClassNode(vnode);
    }
    return createFuncNode(vnode);
  } else {
    console.log(vnode);
    return createTextNode(vnode);
  }
}

// 创建dom节点
function createDomNode(vnode) {
  const { type, props } = vnode;
  const node = document.createElement(type);
  createChildren(node, props.children);
  updateNode(node, props);
  return node;
}

// 创建类组件dom节点
function createClassNode(vnode) {
  const { type, props } = vnode;
  const vvnode = new type(props);
  return render(vvnode.render());
}

// 创建函数组件dom节点
function createFuncNode(vnode) {
  const { type, props } = vnode;
  return render(type(props));
}

// 创建文本节点
function createTextNode(vnode) {
  const node = document.createTextNode(vnode);
  return node;
}

// 遍历子节点
function createChildren(parentNode, children) {
  const childrens = Array.isArray(children) ? children : [children];
  childrens.forEach((child) => {
    const node = render(child);
    parentNode.appendChild(node);
  });
}

// 遍历属性
function updateNode(node, attributes) {
  Object.keys(attributes)
    .filter((attr) => attr !== "children")
    .forEach((attr) => {
      node[attr] = attributes[attr];
    });
}
