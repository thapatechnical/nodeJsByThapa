const os = require("os");

console.log(os.hostname());
console.log(os.homedir());
console.log(os.platform());
console.log(os.arch());
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);
