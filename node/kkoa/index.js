const http = require("http");

module.exports = class KKoa {
  callbacks = [];

  use(callback) {
    this.callbacks.push(callback);
  }

  listen(...args) {
    this.app = http.createServer((req, res) => {
      compose(this.callbacks, {
        set body(val) {
          res.write(val);
        },
      })();
      res.end();
    });
    this.app.listen(...args);
  }
};

function compose(middlewares, ctx) {
  return function () {
    return dispatch(0);
    function dispatch(i) {
      let fn = middlewares[i];
      if (!fn) {
        return Promise.resolve();
      }
      return Promise.resolve(
        fn(ctx, function next() {
          return dispatch(i + 1);
        })
      );
    }
  };
}
