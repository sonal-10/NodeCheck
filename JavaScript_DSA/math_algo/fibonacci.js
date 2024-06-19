/**
 * Fiboncci sequence
 * Factorial of a number
 * Prime number
 * Power of Two
 * Recursion
 * Fibonacci sequence with recursion
 * Factorial of a number with recursion
 */

/*
Fibonacci Sequence
Given a number 'N' find the first 'N' elements of Fibonacci Sequence
*/

function fibonacci(n) {
    let elementArray = [0, 1];
    for (let i = 0; i < n - 2; i++) {
        elementArray.push(elementArray[i] + elementArray[i + 1]);
    }
    console.log(elementArray);
}

fibonacci(7);
// Big-O - O(n) Linear TimeComplexity
