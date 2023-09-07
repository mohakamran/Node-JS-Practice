const path = require("path");
console.log(path.dirname("E:/NodeJs/index.js"));
console.log(path.extname("E:/NodeJs/index.js"));
console.log(path.basename("E:/NodeJs/index.js"));
console.log(path.parse("E:/NodeJs/index.js"));
const name = (path.parse("E:/NodeJs/index.js"));
console.log(name.name);