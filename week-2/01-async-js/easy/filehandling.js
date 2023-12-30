const file = require('fs'); 
// to get the  file system module

file.readFile('text.txt','utf-8',(err,data)=>{
    (err) ? console.log("Error occured") : console.log(data,'\n');
})

const content = "you are writing in the file";

file.writeFile('text.txt',content,(err)=>{
    (err) ? console.log('error occured') : console.log("file written");
})

file.readFile('text.txt','utf-8',(err,data)=>{
    (err) ? console.log("Error occured") : console.log(data);
})