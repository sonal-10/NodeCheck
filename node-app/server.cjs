const foo = ()=> new Promise((resolve,reject)=>{

    let myval = true;
    setTimeout(()=>{
        if(myval){
            resolve("resolved");
        }else{
            reject("rejected");
        }
    },5000)
})


async function getVal()
{
    try{
    const val = await foo()
    console.log(val)
    console.log([1,2])
    }
    catch(err)
    {
        console.log("error");
    }
}
getVal()

// if(foo === 1)
//     console.log("working")
// else
//     "failed"
