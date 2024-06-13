// Objects A group of Properties
// properties what object has
// methods what object does
// use . to access

const Car = {
  model : "Mustang",
  color : "Black",
  year  : 1968,

  drive : function(){
    console.log(`You Drive the Car`);
  },

  brake: function(){
    console.log(`You stepped on the brake`);
  }
}

console.log(Car.model);
console.log(Car.color);
Car.brake();