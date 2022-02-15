import * as KoaRouter from "koa-router";
import * as glob from "glob";

export const router = new KoaRouter();

const method = (router) => (method) => (path) => {
  return (target, property) => {
    router[method](path, target[property]);
  };
};

const decorate = method(router);

export const get = decorate("get");
export const post = decorate("post");

export const load = (folder) => {
  const extname = ".{js,ts}";
  glob
    .sync(require("path").join(folder, `./**/*${extname}`))
    .forEach((item) => require(item));
  return router;
};
