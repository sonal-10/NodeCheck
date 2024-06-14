class User{
    constructor(username,car){
        this.username = username;
        this.car = car;
    }
    
}

class Car{
    constructor(model,year){
        this.model = model;
        this.year = year;
    }
}
module.exports = {User,Car};