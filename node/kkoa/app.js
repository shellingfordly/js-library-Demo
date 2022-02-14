const KKoa = require("./index");
// const KKoa = require("koa");

const app = new KKoa();

app.use(async (ctx, next) => {
  console.log(1);
  ctx.body = "<h1>this is koa!</h1>";
  await next();
  console.log(11);
});
app.use(async (ctx, next) => {
  console.log(2);
  ctx.body = "<h1>Hello, koa2!</h1>";
});

app.listen(3000, () => {
  console.log("http://localhost:3000 port start");
});
