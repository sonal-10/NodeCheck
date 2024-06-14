// Constructor  a special method  of a class  accepts arguments and sets properties

class Student{
  constructor(name,age,gpa){
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }

  study(){
    console.log(`${this.name} is Studying`);
  }
}

const student1 = new Student("Sonal", 22 , 4.2);
console.log(student1.age);
console.log(student1.name);
console.log(student1.gpa);
student1.study();