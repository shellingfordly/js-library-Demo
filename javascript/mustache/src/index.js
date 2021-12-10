import Scanner from './scanner'

window.templateEngine = {
  render(templateStr, data) {
    const scanner = new Scanner(templateStr)
    const tokens = scanner.sacn('{{', '}}')
    const new_tokens = handleTokens(tokens)
    const domStr = handleDataToDom(new_tokens, data)
    return domStr
  }
}

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

function handleDataToDom(tokens, data) {
  let domStr = ''
  for (let token of tokens) {
    switch (token[0]) {
      case Type.START:
        data[token[1]].forEach(item => {
          domStr += handleDataToDom(token[2], item)
        })
        break;
      case 'name':
        if (token[1] === '.') {
          domStr += data
        } else {
          domStr += look(data, token[1])
        }
        break;
      default:
        domStr += token[1]
        break;
    }
  }
  return domStr
}

function look(obj, key) {
  if (typeof obj !== 'object') return obj
  const list = key.split('.')
  return look(obj[list.shift()], list.join(''))
}
