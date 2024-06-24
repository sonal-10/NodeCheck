// Bubble sort is a Poor algorithm only for basic understanding
// Compare adjacent elements in the array and swap their positions if they are not in the intended order

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
}


const arr = [-6, 20, 8, -2, 4]
console.log(arr);
bubbleSort(arr);
console.log(arr);

// Big-O O(n^2) Quadratic Time Complexity