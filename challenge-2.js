const file = require("fs");
file.mkdir("kamran", (err)=> {
    console.log("Folder Created!")
});
file.writeFile('./kamran/async_bio.txt','Hello this is sample data',  (err)=>{
    console.log("file created successfully!");
});
// reading file using async way
file.readFile('./kamran/async_bio.txt',"UTF-8" , (err, data)=>{
    console.log(data);
});

file.rename('./kamran/async_bio.txt', 'my_async_bio.txt', (err)=>{
    console.log("file renamed!");
});

file.unlink('./kamran/my_async_bio.txt', (err)=> {
    console.log("File Deleted!")
});

file.rmdir('kamran', (err)=> {
    console.log("Directory Deleted!")
});
