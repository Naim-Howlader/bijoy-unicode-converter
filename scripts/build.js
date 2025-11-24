const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");
const distDir = path.join(__dirname, "..", "dist");

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir);

// Simple copy for JS projects
function copyFolder(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (let file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const dstPath = path.join(dst, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolder(srcPath, dstPath);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

copyFolder(srcDir, distDir);
console.log("Build completed!");
