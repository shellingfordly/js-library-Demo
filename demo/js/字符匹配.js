const str = `
  //xsaaas
  ramConfig: {
    name: 'xxx',
    sort: 1,
    show: true
  }
  //xsaaas
  //xsaaas
`
const res = str.match(/ramConfig.+{(\s|\S)+}/)[0]
const obj = JSON.parse(JSON.stringify(res.replace(/ramConfig:|\s/g, '')))
// const a = "{name:'xxx',sort:1,show:true}"
// console.log(obj);

const { a = 1} = {a:null}
console.log(a);