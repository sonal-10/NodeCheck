/*
Given a postive integer 'N' determine if the number is a power of 2 or not
An integer is a power of two if there exists an integer 'x' such that 'n'==='2^x
*/

function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 === 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

// N is reduced by half so Big-O O(logN)
// Better Code and time Complexity:

function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

// Time Complexity Big-O O(1)