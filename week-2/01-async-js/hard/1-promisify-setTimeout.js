/*
    Write a function that returns a
     promise that resolves after n seconds have passed, 
     where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve)=>{
        resolve(n);
    })
}

wait(3000).then((n)=>{ 
    // --> here resolve function is a type of function which takes some argument in it
    setTimeout(()=>{
        console.log("I will resolve now")
    },n)
})

module.exports = wait;
