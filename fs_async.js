const fs  = require("fs");
fs.writeFile('async_file.txt',"This is just a simple file", (err)=> {
    console.log("File is created!");
}); 

fs.readFile('async_file.txt', "UTF-8", (err,data)=>{
    console.log(data);
});