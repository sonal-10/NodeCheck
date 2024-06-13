// arr.filter() = creates a new array with all the elements that pass the test provided by a function

let ages = [18, 22, 21, 9, 7, 12, 15, 13, 6, 28, 24];
let names = ["sonal",'reshma','renisha','Samantha'];

let adults = ages.filter(checkAge);

adults.forEach(print);
let rNames = names.filter(checkName);

rNames.forEach(print);


function checkAge(element){
  return element >=18;
}

function checkName(element){
    return element[0] == 'R'|| element[0] == 'r';
}

function print(element){
  console.log(element);
}