/*
 * Write a function that halts the JS thread (make it busy wait) 
for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleepit(milliseconds) {
    return new Promise((resolve)=>{
        resolve(milliseconds);
    })
}

sleepit(2000).then((ms)=>{
    //-> now we are trying to define the resolve()  function
    setTimeout(()=>{},ms);
})

console.log("Hai");

module.exports = sleep;
