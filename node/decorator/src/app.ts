import * as Koa from "koa";
import * as KoaRouter from "koa-router";

const app = new Koa();

const router = new KoaRouter();

router.get("/", (ctx) => {
  ctx.type = "html";
  ctx.body = "Home";
});

router.get("/user", (ctx) => {
  ctx.type = "html";
  ctx.body = "User";
});

app.use(router.routes());
app.use(router.allowedMethods({}));

app.listen(3000, () => {
  console.log("3000");
});
