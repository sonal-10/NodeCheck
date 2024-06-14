const { User } = require('./models');
const { getCar } = require('./carCreator');

const createUser = async () =>{
    try{
        const car = await getCar();
        const user = new User("Sonal",car);
        return user;
    }
    catch(error){
        throw new Error("User Creation Failed", error);
    }
}

module.exports = {createUser};


