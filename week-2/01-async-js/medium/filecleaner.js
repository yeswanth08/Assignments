const file  = require('fs');

file.readFile('file.txt','utf-8',(err,data)=>{
    if (err){
        console.log("Error had occured\n");
    }else{
        data.replace(/\s+/g     ,'');
        console.log(data);
    }
})
