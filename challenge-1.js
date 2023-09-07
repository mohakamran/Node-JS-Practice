const file = require("fs");
file.writeFileSync('bio.txt','Hello and Welcome to Node JS');
file.appendFileSync('bio.txt', "There is another line data");
// file.writeFileSync('bio.txt','There is another line on node js'); 
const output = file.readFileSync('bio.txt');
const o_n = output.toString();
console.log(o_n);