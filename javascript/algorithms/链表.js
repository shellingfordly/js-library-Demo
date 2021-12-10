var distanceK = function (root) {
  const map = new Map()
  let back = root
  dfs(root)

  function dfs(node) {
    if (!node) {
      return
    }
    map.set(node, back)
    back = node
    dfs(node.left)
    back = node
    dfs(node.right)
  }
  console.log(map)
};



const root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 1,
    left: null,
    right: null
  }
}

distanceK(root)

