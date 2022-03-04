const copyFiles = require("./copy");
const deleteFiles  = require("./delete");

module.exports = async function moveFiles(oldPath, newPath) {
  copyFiles(oldPath, newPath).then((res) => {
    deleteFiles(oldPath);
  });
};
