const basePath = process.cwd(); // 返回当前进程的工作目录
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

(() => {
  buildSetup();
  startCreating();
})();
