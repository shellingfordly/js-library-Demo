const copyFiles = require("./copy");
const deleteFiles = require("./delete");
const moveFiles = require("./move");

copyFiles("./files/a/a.js", "./files/b");
// deleteFiles("./files/b");
// moveFiles("./files/b", "./files/a");