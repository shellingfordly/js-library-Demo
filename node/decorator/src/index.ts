import * as Koa from "koa";
import { load } from "./router-decors";
import { resolve } from "path";

const app = new Koa();

const router = load(resolve(__dirname, "./routes"));

app.use(router.routes());
app.use(router.allowedMethods({}));

app.listen(3000, () => {
  console.log("3000");
});
