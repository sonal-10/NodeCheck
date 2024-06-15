// static = belongs to the class, not the objects
// properties: useful for caches, fixed-configuration
// methods:    useful for utility functions

class Car{ 
    static numberOfCars = 0;
    constructor(model,year){
        this.model = model;
        this.year = year;
        Car.numberOfCars += 1;
    }

     static race(){
        console.log("Let's Race!");
    }
}

const car1 = new Car("Ford",1968);
const car2 = new Car("Toyota",2002);
const car3 = new Car("Ferrari",2023);

console.log(Car.numberOfCars);

Car.race();



// inheritance
// a child class can inherit all the properties of the other class

class Animal {
  alive = true;

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run(){
    console.log(`${this.name} is running`);
  }
 }

 class Fish extends Animal { 
  name = "fish";

  swim(){
    console.log(`${this.name} is swimming`);
  }
}

class Hawk extends Animal { 
  name = "hawk";
  
  fly(){
    console.log(`${this.name} is flying`);
  }
}

let animal = new Animal;
let rabbit = new Rabbit;
let fish   = new Fish;
let hawk   = new Hawk;

console.log(rabbit.alive);
rabbit.run();