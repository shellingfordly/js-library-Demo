/**
 * 将一个一维数组，按照
 * 
 * 
 */


const Type = {
  START: '#',
  END: '/'
}

function handleTokens(tokens) {
  const newTokens = []
  const stack = []
  let collector = newTokens

  for (const token of tokens) {
    switch (token[0]) {
      case Type.START:
        collector.push(token)
        stack.push(token)
        collector = token[2] = []
        break;
      case Type.END:
        stack.pop()
        collector = stack.length ? stack[stack.length - 1][2] : newTokens
        break;
      default:
        collector.push(token)
        break;
    }

  }
  return newTokens
}