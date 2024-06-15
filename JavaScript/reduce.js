// array.reduce() = reduces array to a single value 
let prices = [200, 400, 200];

let total = prices.reduce(checkOut);

function checkOut(total, element){
  return total + element;
  }
  
console.log(`The total is ${total}`);