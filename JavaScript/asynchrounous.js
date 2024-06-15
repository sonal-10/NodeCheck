// Asynchronous code Outof sequence

console.log("Start");
setTimeout(() => {
    console.log("This is Asynchrounous");
},2000);
console.log("End");
