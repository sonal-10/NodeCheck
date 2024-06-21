function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = numberToInsert;
    }
}

const arr = [-8, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr);
// Big-O O(n^2);

// First element should be sorted 