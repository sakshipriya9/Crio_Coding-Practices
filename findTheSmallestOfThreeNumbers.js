// Problem Description
// Implement the function findSmallest() which

// Accepts three number arguments, a, b, and c

// Returns the smallest number out of all three


// Hints
// Use a combination of comparison operator and logical operator.

// You can also chained if else statements.


// Sample Input
// 1, 9, 78


// Sample Output
// 1


// Explanation
// 1 is the output, as it is smaller than 9 and 78.


// Sample Input 2
// -19, -8, 10


// Sample Output 2
// -19


// Explanation
// -19 is the output, as it is smaller than -8 and 10.

function findSmallest(a,b,c){
    if(a < b && a < c){
        return a;
    }else if(b < a && b < c){
        return b;
    }else{
        return c;
    }
}
console.log(findSmallest(1,9,78));
console.log(findSmallest( -19, -8, 10));