const path = require("path");

console.log(path.dirname("E:/nodejsYoutube/PathModule/path.js"));
console.log(path.extname("E:/nodejsYoutube/PathModule/path.js"));
console.log(path.basename("E:/nodejsYoutube/PathModule/path.js"));

const myPath = path.parse("E:/nodejsYoutube/PathModule/path.js");
console.log(myPath.root);
