// Given an sorted array of 'N' elements and a target element 'target' find the index of 'target' in the array.
// Return -1 if the target is not found 
// Used only when the array is sorted

function binarySearch(arr, target) {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {

        // Use floor since if the array elements are even then it may result in float it will return the lower value
        let middleIndex = Math.floor(leftIndex + rightIndex) / 2;

        // Check if the middleIndexdle element is the target
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        // Check if the target is greater than the middleIndexdle element then move leftIndex pointer
        else if (target > arr[middleIndex]) {
            leftIndex = middleIndex + 1;
        }
        // Check if the target is less than the middleIndexdle element then move rightIndex pointer
        else {
            rightIndex = middleIndex - 1;
        }
    }
    return -1;
}
console.log(binarySearchRecursive([1, 3, 4, 7, 8, 9, 10], 8));
// Big O O(logn)

// Recursive Solution to Binary Search

// function binarySearchRecursive(arr, target) {
//     return search(arr, target, 0, arr.length - 1);
// }

// function search(arr, target, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//         return -1;
//     }

//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//     if (target === arr[middleIndex]) {
//         return middleIndex;
//     }

//     if (target > arr[middleIndex]) {
//         return search(arr, target, middleIndex + 1, rightIndex)
//     }
//     else {
//         return search(arr, target, leftIndex, middleIndex - 1);
//     }
// }
// Big-O O(logn)