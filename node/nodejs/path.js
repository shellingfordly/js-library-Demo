const path = require("path");

console.log(path.resolve());
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));

console.log(path.dirname(__filename));

console.log(path.delimiter);
