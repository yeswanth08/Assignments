const file  = require('fs');

file.readFile('file.txt','utf-8',(err,data)=>{
    if (err){
        console.log("Error had occured\n");
    }else{
        const value=data.replace(/\s+/g,' ');
        file.writeFile('file.txt',value,(err)=>{
            (err) ? console.log('Error has occured') :  console.log(value);
        })
    }
})
