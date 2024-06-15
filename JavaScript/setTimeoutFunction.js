/**
 * timeId = setTimeout(function , time, (parameters to function)) invokes a function after a number of milliseconds
 * Asynchronous function (Doesn't pause the execution)
 */

let timeID1 = setTimeout(firstMessage,3000);
let timeID2 = setTimeout(secondMessage,6000);
let timeID3 = setTimeout(thirdMessage,9000);

clearTimeout(timeID1);

function firstMessage(){
    console.log("Hi Sonal here~~");
}
function secondMessage(){
    console.log("Hi Reshma here~~");
}
function thirdMessage(){
    console.log("Hi Zaniya here~~");
}
