/*
Problem Description
You are given two numbers a and b as arguments. You have to implement the function isEqual that will return true 
if the numbers are equal, else return false.


Hint: Use comparison operator (===).

Hint: Comparison operators return a boolean value. Use a new variable which can be used to store and return the result.

Hint: You can also use "if else" to solve this problem.


Sample Input
89, 11


Sample Output
false


Explanation
89 is not equal to 11, so return false.
*/

function isEqual (a,b) {
    //checking true conditional statement
    if(a === b) {
        return true;
    }
    return false;
}
//call the function and print the result
console.log(isEqual(89,11));
console.log(isEqual(89,89));