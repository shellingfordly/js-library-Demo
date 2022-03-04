const fs = require("fs");
const { join } = require("path");

module.exports = async function deleteFiles(path) {
  if (!fs.existsSync(path)) {
    console.warn(new Error("路径不存在。"));
    return;
  }

  const file = fs.lstatSync(path);

  // 删除文件
  if (file.isFile()) {
    fs.unlinkSync(path);
    return;
  }

  // 删除文件夹
  if (file.isDirectory()) {
    const files = await fs.readdirSync(path);
    if (files && files.length) {
      for (const fileName of files) {
        if (fileName.startsWith(".")) {
          continue;
        }
        const p = join(path, fileName);
        const f = fs.lstatSync(p);
        if (f.isFile()) {
          fs.unlinkSync(p);
        }
        if (f.isDirectory()) {
          await deleteFiles(p);
          fs.rmdirSync(p);
        }
      }
    }
    return;
  }
};