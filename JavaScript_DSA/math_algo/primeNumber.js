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

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
console.log(isPrime(5));
// If we use it without sqrt(n) then the Time Complexity is O(n) Linear
// Big-O O(sqrt(n)) 
