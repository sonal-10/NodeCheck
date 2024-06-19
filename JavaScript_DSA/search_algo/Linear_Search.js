// Given an array of 'N' elements and a target element 'target' find the index of 'target' in the array.
// Return -1 if the target is not found 

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,5,4,7,8,9,10],101));
// Big O O(n) Linear