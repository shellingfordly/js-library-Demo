const a = { foo: 'bar', b: { c: 'ccc' } }
const proxy = new Proxy(a,
  {
    get() {
      return 'proxy attr'
    }
  }
)
const copy = Object.assign({}, a)
const create = Object.create(a)

copy.b.c = 'copy'



const proxy1 = new Proxy(a, {
  get(target, property, receiver) {
    receiver.proxy = 1
    return target[property]
  }
})

const wm = new WeakMap()

class User {

  constructor(userId) {
    wm.set(this, userId)
  }

  set id(userId) {
    wm.set(this, userId)
  }

  get id() {
    return wm.get(this)
  }
}

const user = new User(123)
const proxyUser = new Proxy(user, {

})
console.log(1, user.id)
console.log(2, proxyUser.id);


