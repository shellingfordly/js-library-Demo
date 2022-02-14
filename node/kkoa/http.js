const http = require("http");

const app = http.createServer((req, res) => {
  res.write("test");
  res.end();
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
