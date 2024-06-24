function Person(fName,lName){
    this.firstname = fName;
    this.lastname = lName;
}
Person.prototype.getName = function(){
    return this.firstname + ' ' + this.lastname;
}
function Super(fName,lName){
    this.person = true;
    Person.call(this,fName,lName)
}

Super.prototype = Object.create(Person.prototype);

const person1 = new Person('Sonal','Monis');
const person2 = new Person('Reshma','Monis');


console.log(person1.getName());
console.log(person2.getName());

// Prototype was the existing and on this inheritance was done
// In the revised version class constructors methods and super() and extends
// These made the already exisiting code easier adding syntactical sugar

