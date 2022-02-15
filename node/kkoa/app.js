const KKoa = require("./index");
// const KKoa = require("koa");

const app = new KKoa();

app.use(async (ctx, next) => {
  await next();
  ctx.body = "<h1>This is koa!</h1>";
});

app.use(async (ctx, next) => {
  ctx.body = "<h1>Hello!</h1>";
});

app.listen(3000, () => {
  console.log("http://localhost:3000 port start");
});
