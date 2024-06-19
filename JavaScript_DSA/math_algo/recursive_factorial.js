function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return (n * factorial(n - 1))
}

console.log(factorial(1));
// n! = n * (n-1)!
// Big-O O(n) Same as the iterative Factorial