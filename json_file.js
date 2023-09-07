const fs = require("fs");

const data = {
    name: "Muhammad Kamran",
    age:30,
    Designation: "Web Developer"
}

const JsonData = JSON.stringify(data);

// fs.writeFile('index.json', JsonData, (err)=>{
//     console.log("Data has been saved in file succesfully!!!!!");
// });

fs.readFile('index.json',"UTF-8" ,(err,data)=>{
    console.log(data);
});

// console.log(data); 

// const jsonData = JSON.stringify(data);
// // console.log(jsonData);
// const objtData = JSON.parse(jsonData);
// console.log(objtData);
