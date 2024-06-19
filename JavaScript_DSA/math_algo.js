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

// function fibonacci(n) {
//     let elementArray = [0, 1];
//     for (let i = 0; i < n - 2; i++) {
//         elementArray.push(elementArray[i] + elementArray[i + 1]);
//     }
//     console.log(elementArray);
// }

// fibonacci(7);
// Big-O - O(n) Linear TimeComplexity

/*
Factorial of a Number
Given a number 'N' find the factorial of that integer
*/

// function factorial(n){
//     result  = 1;
//     for(let i = 2; i<=n; i++){
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(5));

// Big-O O(n) Linear

/*
Prime Number
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers
    if n = 36
    sqrt(36) = 6
    Factors of 6 are
    6 * 1 = 6
    3 * 2 = 6
    either a or b is less than sqrt
    a,b <= sqrt(n)
*/

// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0)
//             return false;
//     }
//     return true;
// }

// console.log(isPrime(5));
// Big-O O(sqrt(n)) Logarithmic