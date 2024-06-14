/**
 * promise = Object that encapsulates the result of an asynchronous operation
 * Let asynchronous methods return values like synchronous methods
 * Promise to return something in the future.
 * Like a Database query returning the values.
 * 
 * the STATE is 'pending' then: 'fulfilled' or 'rejected'
 * the RESULT is what can be returned
 * 2 parts of producing and consuming
 * 
 * async = makes a function return a Promise
 * 
 * async function loadFile(){
    let fileLoaded = true;
 
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }
  }
 
loadFile().then(value => console.log(value))
                 .catch(error => console.log(error));

                 
 * await = makes a function wait for a Promise
 */

// producing code
const loadFile = new Promise((resolve, reject)=>{
    let fileLoaded = false;

    if(fileLoaded){
        resolve("File Loaded");
    }
    else{
        reject("File Not Loaded");
    }
});
// consuming code
loadFile.then(value => console.log(value))
        .catch(error => console.log(error));