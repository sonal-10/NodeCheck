// arr.map() = callback function is executed once for each of the array element and a new array is created.

let numbers = [1,2,3,4,5];


// ES6 standard Arrow Functions
let squares = numbers.map((element) => {
  return Math.pow(element,2);
});


let cubes = numbers.map(cube);

squares.forEach(print);
cubes.forEach(print);

function cube(element){
    return Math.pow(element,3);  
}

function print(element){
  console.log(element);
}