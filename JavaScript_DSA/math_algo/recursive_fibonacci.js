
/**
 * Recursion
 * It is a function calling itself
 * Smaller problem of the same problem
 * Key Points
 * Recursive solutions needs to have a base case to terminate the condition.
 * Recursive might simplify solving a problem but it does not translate to a faster solution.
 * It may be far worse compared to the iterative solution.
 */

function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return (fibonacci(n - 1) + fibonacci(n - 2));
}

console.log(fibonacci(5));
// In this case the iterative solution is far more better than recursive
// Big-O O(2^n) Not a good solution for the Fibonacci;