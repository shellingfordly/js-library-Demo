const path = require("path");
const fs = require("fs");
const vm = require("vm");

function Module(id) {
  this.id = id;
  this.exports = {};
}

Module._cache = {};

Module._extensions = {
  ".js"(_module) {
    const content = fs.readFileSync(_module.id, "utf-8");
    const contentFn = Module._wrapeer[0] + content + Module._wrapeer[1];
    const fn = vm.runInThisContext(contentFn);

    const exports = _module.exports;
    const dirname = path.dirname(_module.id);
    const filename = _module.id;

    fn.call(exports, exports, _module, myRequire, dirname, filename);
  },
  ".json"(_module) {
    const content = JSON.parse(fs.readFileSync(_module.id, "utf-8"));
    _module.exports = content;
  },
};

Module._wrapeer = [
  "(function(exports, module, require, __dirname, __filename){",
  "})",
];

Module.prototype.load = function () {
  const extname = path.extname(this.id);
  Module._extensions[extname](this);
};

Module._resolveFilename = function (filename) {
  const mPath = path.join(__dirname, filename);
  if (fs.existsSync(mPath)) {
    return mPath;
  }
  const suffixs = Object.keys(Module._extensions);
  for (let i = 0; i < suffixs.length; i++) {
    const _mPath = mPath + suffixs[i];
    if (fs.existsSync(_mPath)) {
      return _mPath;
    }
  }
  console.log(new Error(`${filename} is no exits`));
};

function myRequire(filename) {
  // 绝对路径
  const mPath = Module._resolveFilename(filename);

  // 缓存优先
  const cacheModule = Module._cache[mPath];
  if (cacheModule) return cacheModule.exports;

  // 创建空对象加载目标模块
  const module = new Module(mPath);

  // 缓存已加载模块
  Module._cache[mPath] = module;

  // 执行加载
  module.load();

  return module.exports;
}

const res = myRequire("./test");
console.log(res);
