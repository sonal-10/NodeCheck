/**
 * Collection of Values mix of datatypes
 * Arrays are resizable
 * Array are iterable (for of loop)
 */

const arr = [1,2,3,4,5,6,'7EDGE']

arr.push('Sonal'); // Add to the end of array
arr.push('');      
arr.pop();        // Delete from the end of the array
arr.unshift(0);   // Add to the start of the array
arr.shift();      // Delete from the start of the array


for(const item of arr){
    console.log(item);
}

// map,filter,reduce.concat,slice,splice

let arr1 = [1,2,3]
let arr2 = [1,2,3]
console.log(arr2.concat(arr1));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.splice(2);
console.log(a);
