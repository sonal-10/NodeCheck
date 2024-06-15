// `this` refrence to a particular object the object depends on the immediate context

const Car1 = {
  model : "Mustang",
  color : "Black",
  year  : 1968,

  drive : function(){
    console.log(`You Drive ${this.model}`);
  },

  brake: function(){
    console.log(`You stepped on the brake`);
  }
}

const Car2 = {
  model : "Corvette",
  color : "White",
  year  : 2020,

  drive : function(){
    console.log(`You Drive ${this.model}`);
  },

  brake: function(){
    console.log(`You stepped on the brake`);
  }
}

Car1.drive();
Car2.drive();