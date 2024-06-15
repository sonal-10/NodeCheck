// using the fetch() api


// const promise1 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res =>
//     res.json()
// );
// const promise2 = fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res =>
//     res.json()
// );
// const promise3 = fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res =>
//     res.json()
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res =>
//     res.json()
// );
// const promise5 = new Promise((resolve, reject)=>
//     setTimeout(resolve, 2000, "Hello World")
// );

// Promise.all([promise1, promise5]).then(values => console.log(values));

// Async-Await for fetch()

const { error } = require('console');
const fs = require('fs');

class User{
    constructor(name,username,email){
        this.name = name;
        this.username = username;
        this.email = email;
    }
}

async function getUsers(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if(!res.ok){
            console.error(`Error: Status ${res.status}`);
        }

        const data = await res.json();

        // Map each user object to a User instance
        const users = data.map(user => 
            new User(user.name,user.username,user.email)
        );
       
        let output = '';
        users.forEach((user,index) => {
            output += `User: ${index+1}
            Name: ${user.name}
            UserName: ${user.username}
            Email: ${user.email}
            ------------------\n`;
        });

        // Write Output to a file
        fs.writeFile('output.txt',output, (err)=>{
            if(err){
                console.error("Error Writing to the File: ",err);
            }
            else{
                console.log("File Written Successfully");
            }
        });
    }
    catch(error){
        console.error("Error Fetching Users: ",error);
    }

}

getUsers();