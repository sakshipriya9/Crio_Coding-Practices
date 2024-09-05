// Problem Description
// You are given a number num as an argument. You have to implement the function evenOrOdd that will return "Even" for even numbers or "Odd" for odd numbers.


// Hint: Even numbers are numbers that are exactly divisible by 2, whereas an odd number cannot be exactly divided by 2.

// Hint: You can use conditionals to implement it.


// Sample Input
// 10


// Sample Output
// Even


// Explanation
// 10 is divisible by 2 hence the output is Even.

function evenOrOdd(num) {1
    // Implement the logic to check that given number is even or odd
    if( num % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}
// call the function and print the result
console.log(evenOrOdd(10));