const fs = require("fs");
const { join, dirname, basename } = require("path");

module.exports = async function copyFiles(_oldPath, _newPath) {
  let oldPath = join(__dirname, _oldPath);
  let newPath = join(__dirname, _newPath);

  if (!fs.existsSync(oldPath) || !fs.existsSync(newPath)) {
    console.warn(new Error("路径不存在。"));
    return;
  }
  const oldFile = fs.lstatSync(oldPath);
  const newFile = fs.lstatSync(newPath);

  // oldPath 为文件
  if (oldFile.isFile()) {
    if (newFile.isDirectory()) {
      newPath = join(newPath, basename(oldPath));
    }
    fs.copyFileSync(oldPath, newPath);
    return;
  }

  // 如果 oldPath 是文件夹，则 newPath 应该为路径
  if (newFile.isFile()) {
    console.warn(new Error("参数2应为路径。"));
    newPath = dirname(newPath);
  }

  // oldPath 为文件夹
  if (oldFile.isDirectory()) {
    const files = await fs.readdirSync(oldPath);
    if (files && files.length) {
      files.forEach(async (fileName) => {
        const oPath = join(oldPath, fileName);
        const oFile = fs.lstatSync(oPath);
        if (oFile.isFile()) {
          const newFile = join(newPath, fileName);
          fs.copyFileSync(oPath, newFile);
        }
        if (oFile.isDirectory()) {
          const oldDir = join(oldPath, fileName);
          const newDir = join(newPath, fileName);
          if (!fs.existsSync(newDir)) {
            await fs.mkdirSync(newDir);
          }
          moveFiles(oldDir, newDir);
        }
      });
    }
    return;
  }
};
