const path = require("path");

console.log(path.dirname("E:/nodejsYoutube/PathModule/index.js"));
console.log(path.extname("E:/nodejsYoutube/PathModule/index.js"));
console.log(path.basename("E:/nodejsYoutube/PathModule/index.js"));
const mypath = path.parse("E:/nodejsYoutube/PathModule/index.js");
console.log(mypath.name);
