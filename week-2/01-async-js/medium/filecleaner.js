const file  = require('fs');

function filereading(){
    return new Promise((resolve)=>{ 
        // -->it uses the function given by promise
        resolve();
    })
}

filereading().then(()=>{
    // we giving some function to the promise i.e defining resolve();
    file.readFile('file.txt','utf-8',(err,data)=>{
        if (err) console.log("Error has occured")
        else{
            const content = data.replace(/\s+/g,' ');
            file.writeFile('file.txt',content,(err)=>{
                (err) ? (console.log("Error has occured")) 
                : (console.log("File has written"));
            })
            console.log(content);
        }
    })
})

