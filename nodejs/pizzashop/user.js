class User{
    constructor(name){
        this.name = name;
    }
}

async function getUser(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if(!res.ok){
            console.error(`Error: Status ${res.status}`);
        }

        const data = await res.json();

        // Map each user object to a User instance
        const users = data.map(user => 
            new User(user.name)
        );
        let names = [];
        // Print the Users
        users.forEach((user)=>{
            names.push(user.name);
        });
        return names;
    }
    catch(error){
        console.log("Failed to Fetch from Database");
        return [];
    }
}

module.exports = getUser;
