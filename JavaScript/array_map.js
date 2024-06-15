// arr.map() = callback function is executed once for each of the array element and a new array is created.

let numbers = [1,2,3,4,5];

let squares = numbers.map(sqaure);
let cubes = numbers.map(cube);

squares.forEach(print);
cubes.forEach(print);

function sqaure(element){
  return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);  
}

function print(element){
  console.log(element);
}