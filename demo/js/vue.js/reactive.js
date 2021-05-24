const targetMap = new Map()

let currtEffect

class Dep {
  constructor(val) {
    this.effects = new Set()
    this._val = val
  }

  get value() {
    this.depend()
    return this._val
  }

  set value(newVal) {
    this._val = newVal
    this.notice()
  }

  depend() {
    console.log('====depend====')
    if (currtEffect) {
      console.log('====depend has currtEffect====', currtEffect)
      this.effects.add(currtEffect)
    }
  }

  notice() {
    console.log('====notice====')
    this.effects.forEach(effect => effect())
  }

}


function effectWatch(effect) {
  console.log('====effectWatch====')
  currtEffect = effect
  effect()
  currtEffect = null
}

function getDep(target, key) {
  console.log('====getDep====')
  let depsMap = targetMap.get(target)

  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }

  return dep
}

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      console.log('reactive get', target, key)

      const dep = getDep(target, key)
      dep.depend()

      return Reflect.get(target, key)
    },
    set(target, key, value) {
      console.log('reactive set', target, key, value)

      const result = Reflect.set(target, key, value)
      const dep = getDep(target, key)
      dep.notice()
      
      return result // boolean
    }
  })
}

// let b

// const a = new Dep(10)

// effectWatch(() => {
//   b = a.value + 10
//   console.log('b', b);
// })


// a.value = 20
// a.value = 30



const state = reactive({
  num1: 10,
  num2: 333,
})

let res1
let res2

effectWatch(() => {
  console.log('==== effect1  ====')
  res1 = state.num1 + 10
  console.log('res1', res1);
})

// effectWatch(() => {
//   console.log('==== effect2  ====')
//   res2 = state.num2 + 1
//   console.log('res2', res2);
// })

state.num1 = 20





