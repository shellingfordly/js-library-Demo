/**
 * 下一个单元任务 fiber
 * fiber
 *  child 第一个子节点
 *  type 类型
 *  key
 *  porps 属性
 *  stateNode 原生dom
 *  sibling 下一个兄弟节点
 *  return 父节点
 */
let nextUnitOfWork = null;
let wipRoot = null;

function render(vnode, container) {
  wipRoot = {
    type: "div",
    props: {
      children: { ...vnode },
    },
    stateNode: container,
  };

  nextUnitOfWork = wipRoot;
}

function createNode(workInProgress) {
  const { type, props } = workInProgress;
  const node = document.createElement(type);
//   updateNode(node, props);
  return node;
}

function createDomNode(workInProgress) {
  const { props, stateNode } = workInProgress;
  // 判断是否有 原生dom
  if (!stateNode) {
    workInProgress.stateNode = createNode(workInProgress);
  }

  createDomchildrenNode(workInProgress, props.children);
}

function createDomchildrenNode(workInProgress, children) {

  const newChildren = Array.isArray(children) ? children : [children];

  let previousNewFiber = null;
  newChildren.forEach((child, index) => {
    const newFiber = {
      type: child.type,
      props: { ...child.props },
      stateNode: null,
      child: null,
      sibling: null,
      return: workInProgress,
    };

    if (index === 0) {
      workInProgress.child = newFiber;
    } else {
      // 给上一次的 fiber 设置 sibling（下一个兄弟节点）
      // 既是当前的 newFiber
      previousNewFiber.sibling = newFiber;
    }
    // 记录 上一个 fiber
    previousNewFiber = newFiber;
  });
}

function performUnitWork(workInProgress) {
  // step1 执行任务
  const { type } = workInProgress;
  if (isString(type)) {
    // 处理原生标签节点
    createDomNode(workInProgress);
  }

  // step2 任务执行完毕，返回下一个执行任务
  if (workInProgress.child) {
    // 首先找到 第一个子节点 并返回
    return workInProgress.child;
  }

  let nextFiber = workInProgress;
  while (nextFiber) {
    // 其次找 下一个兄弟节点
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    // 最后找 父节点的兄弟节点
    nextFiber = nextFiber.return;
  }
}

function workLoop(IdleDeadline) {
  while (nextUnitOfWork && IdleDeadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitWork(nextUnitOfWork);
  }
}

requestIdleCallback(workLoop);
