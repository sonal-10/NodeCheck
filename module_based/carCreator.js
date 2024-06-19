const { Car } = require('./models');

const getCar = () => new Promise((resolve,reject) =>{
    setTimeout(() => {
        const car = new Car("Ford GT",1986);
        if(car instanceof Car){
            resolve(car);
        }else{
            reject("User's Car is not created");
        }
    },5000);
});

module.exports = {getCar};