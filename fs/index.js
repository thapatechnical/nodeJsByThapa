// const fs = require("fs");
// const { get } = require("http");

// let data = fs.readFileSync("read.txt");
// // data buffer we get, we use toString to get the original string back
// data = data.toString();
// console.log(data);

// const fs = require("fs");

// fs.writeFileSync("read.txt", "Welcome back to my channel thapa technical");

// we can append the data at the end
// fs.appendFileSync(
//   "read.txt",
//   " guys now its a challenge time for you to do the same"
// );

// we can rename the file
// fs.renameSync("read.txt", "readwrite.txt");

// let data = fs.readFileSync("readwrite.txt");
// data = data.toString();

// console.log(data);

// we can also check the file path
// console.log(fs.realpathSync("readwrite.txt"));

// const fs = require("fs");

// const datas = fs.readFileSync("data/bio.txt", "utf-8");
// fs.unlinkSync("data/bio.txt");
// fs.rmdirSync("data");

// Challenge Time

//  1: Create a folder named it Thapa
//  2: Create a file in it named bio.txt and data into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name to mybio.txt
//  6: now delete both the file and the folder
