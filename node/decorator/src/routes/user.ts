import { get } from "../router-decors";

export class User {
  @get("/list")
  list(ctx) {
    console.log("/list");
    ctx.body = "List";
  }

  @get("/add")
  add(ctx) {
    console.log("/add");
    ctx.body = "Add";
  }
}
