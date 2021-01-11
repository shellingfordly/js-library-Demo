const list = [
  {
    a: 1,
  },
  {
    a: 3,
  },
  {
    a: 0
  },
  {
    a:2
  },
  {},
  {},
  {}
]

function sort(list){
  const map = {
    sort: {},
    list: []
  }
  for (const item of list) {
    if(item.a) map.sort[item.a] = item
    else map.list.push(item)
  }
  
  console.log(map);
}
sort(list)