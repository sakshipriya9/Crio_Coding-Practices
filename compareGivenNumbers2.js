// Problem Description
// You are given three numbers a, b and c as arguments. You have to implement the function isDescending that will return true only if the first number is greater than the second number AND the second number is greater than the third number. Else, return false.


// Hint: This is a combination of comparison operator and logical operator.


// Sample Input
// 10, 9, 7


// Sample Output
// true


// Explanation
// True, since 10 is greater than 9 and 9 is greater than 7.

function isDescending(a,b,c) {
    //Implement the logic to check that a is greater than b and b is greater than c
    if(a > b && b > c){
        return true;
    }else{
        return false;
    }
}
// call the function and print the result
console.log(isDescending(10,9,7));