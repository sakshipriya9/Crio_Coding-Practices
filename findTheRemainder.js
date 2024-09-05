// Problem Description
// Implement the function remainderOfDivision() that

// Accepts two number arguments a and b

// Returns the remainder when you divide the first number a by the second number b


// Hints
// Choose the correct arithmetic operator that can give the remainder. The remainder will be a whole number.


// Sample Input
// 10, 3


// Sample Output
// 1


// Explanation
// When 10 is divided by 3, we get a quotient of 3 and a remainder of 1.

function remainderOfDivision(a,b) {
    let remainder = a%b;
    return remainder;
}
// call the function and print the result
console.log(remainderOfDivision(10,3));