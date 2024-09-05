// Problem Description
// Implement the function compareNumbers() that

// Accepts three numbers arguments a, b and c

// Returns a boolean

// true, if the first number a is equal to the second number b

// true, if the second number b is equal to the third number c

// false, otherwise


// Hints
// Use a combination of comparison operator and logical operator.


// Sample Input
// 10, 99, 99


// Sample Output
// true

function compareNumbers(a,b,c){
    //Logic to check numbers are equal to each other or not
    if(a == b || b == c){
        return true;
    }else{
        return false;
    }
}
// call the function and print the result
console.log(compareNumbers(10,99,99));
console.log(compareNumbers(1,2,3));