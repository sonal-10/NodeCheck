function quickSort(arr) {
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[0];
    let left =[];
    let right=[];
    for(let i=arr.length-1;i>0;i--){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
const arr = [-1, -8, 100, 19, 21, 7, 1, 2, 1, 1, 3];
let sortedArr = quickSort(arr);
console.log(sortedArr);
// Worst Case Big-O O(n^2); if the array is sorted
// Average O(nlogn)

// Pick a pivot element first element or last element or middle or random
// Smaller to the left
// Larger to the right