export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr.trim()
    this.pos = 0
    this.tail = this.templateStr
    this.resList = []
  }

  sacn(startStr, endStr) {
    let i = this.pos
    while (true) {
      this.pos++

      // 文本
      if (this.tail.indexOf(startStr) == 0) {
        const val = this.templateStr.slice(i, this.pos - 1)
        this.resList.push(['text', val])
        i = this.pos + 1
      }

      //变量
      if (this.tail.indexOf(endStr) === 0) {
        const val = this.templateStr.slice(i, this.pos - 1)
        if (['#', '/'].includes(val[0])) {
          this.resList.push([val[0], val.slice(1)])
        } else {
          this.resList.push(['name', val])
        }
        i = this.pos + 1
      }

      this.tail = this.templateStr.slice(this.pos)

      if (!this.tail) {
        break
      }
    }
    this.resList.push(['text', this.templateStr.slice(i)])

    return this.resList
  }
}