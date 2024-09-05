// Problem Description
// A triangle is a shape with three sides and three corners. An equilateral triangle is a type of triangle that has all three sides of the same length. In addition, all three interior angles of an equilateral triangle are equal to 60 degrees.


// image


// Implement a function isEquilateralType()

// Accepts three sides of a triangle as number arguments side1, side2, and side3

// Returns a boolean

// true, if all the sides are equal

// false, otherwise


// Note

// You can assume that all sides of the triangle, side1, side2, and side3 will be greater than 0.


// Sample Input 1
// 9, 9, 9


// Sample Output 1
// true


// Explanation
// Each of the sides is 9 and thus equal. Therefore, the output is true


// Sample Input 2
// 19, 18, 18


// Sample Output 2
// false


// Explanation
// The two sides, each 18, are not equal to the third side, 19. Therefore, the output is false.

function isEquilateralType(side1, side2, side3) {
    if(side1 == side2 && side2 == side3){
        return true;
    }else{
        return false;
    }
}
console.log(isEquilateralType(9,9,9));
console.log(isEquilateralType(19,18,18));