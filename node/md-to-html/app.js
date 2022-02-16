const { marked } = require("marked");
const path = require("path");
const fs = require("fs");

const markPath = path.join(__dirname, process.argv[2]);
const htmmlPath = markPath.replace(path.extname(markPath), ".html");

const parseFile = async () => {
  const data = await fs.readFileSync(markPath);
  const htmlStr = marked(data.toString());
  fs.writeFileSync(htmmlPath, htmlStr);
};

fs.watchFile(markPath, parseFile);
