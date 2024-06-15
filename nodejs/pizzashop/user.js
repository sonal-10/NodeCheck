class User {
    constructor(name) {
        this.username = name;
    }

    setUser(name){
        this.username = name;
    }
}

async function getUser() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!res.ok) {
            console.error(`Error: Status ${res.status}`);
        }

        const data = await res.json();

        // Map each user object to a User instance
        const users = data.map(user =>
            new User(user.name)
        );

        return users;
    }
    catch (error) {
        console.log("Failed to Fetch from API");
    }
}

module.exports = { User, getUser };