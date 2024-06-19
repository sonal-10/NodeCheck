
/*
Factorial of a Number
Given a number 'N' find the factorial of that integer
*/

function factorial(n){
    result  = 1;
    for(let i = 2; i<=n; i++){
        result = result * i;
    }
    return result;
}

console.log(factorial(5));

// Big-O O(n) Linear
