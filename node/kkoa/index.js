const http = require("http");
const request = require("./request");
const response = require("./response");
const context = require("./context");

module.exports = class KKoa {
  middlewares = [];

  use(middleware) {
    this.middlewares.push(middleware);
  }

  listen(...args) {
    this.app = http.createServer(async (req, res) => {
      const ctx = this.createContext(req, res);

      const fn = this.compose(this.middlewares);
      await fn(ctx);
      res.end(ctx.body);
    });
    this.app.listen(...args);
  }

  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);

    ctx.req = ctx.request = req;
    ctx.res = ctx.response = res;

    return ctx;
  }

  compose(middlewares) {
    return (ctx) => {
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
};
