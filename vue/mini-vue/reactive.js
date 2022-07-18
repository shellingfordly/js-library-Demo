const reactiveMap = new WeakMap();

const get = createGetter();
const set = createSetter();

const mutableHandlers = {
  get,
  set,
};

function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandlers);
}

function createReactiveObject(target, proxyMap, baseHandlers) {
  const oldProxy = proxyMap.get(target);

  if (oldProxy) {
    return oldProxy;
  }

  return new Proxy(target, baseHandlers);
}

function createGetter() {
    
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);

    return result;
  };
}
