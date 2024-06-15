// Error handling
// try catch throw finally

try{
    let x = "ps";
    x = Number(x);
    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty";

    console.log(`${x}`);
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("This is Finally block");
}