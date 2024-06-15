// MAP It holds key value pairs of any datatype


const store = new Map([
  ["T-Shirts",99],
  ["Jeans",400],
  ["Shirts",499],
  ["Socks",80],
]);

let shoppingCart = 0;
// shoppingCart += store.get("T-Shirts")
store.set("Hat",90);
store.delete("Hat");
console.log(store.size);
store.forEach((value,key) => console.log(`${key}  $${value}`));