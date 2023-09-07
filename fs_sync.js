const fs = require("fs");
// creating a new file
// fs.writeFileSync('read.txt',"Welcome to channel");
// updating content
// fs.writeFileSync('read.txt',"Welcome to channel and Node JS");
// append
// fs.appendFileSync('read.txt', "C++ is better than C");
const buf = fs.readFileSync('read.txt');
org_data = buf.toString();
console.log(org_data); // buffer is used to store binary data

