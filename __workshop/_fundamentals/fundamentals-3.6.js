// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub", return their difference.
//      - "mul", return their product.
//      - "div", return the quotient of the two numbers.
//      - Anything else return undefined.
// - If the two values are not numbers, return undefined

// For example:
// calculator(["add", 10, 20]); // 30

function calculator(arr) {
  num1 = arr[1];
  num2 = arr[2];
  if (arr[0] === "add") {
    return num1 + num2;
  } else if (arr[0] === "sub") {
    return num1 - num2;
  }else if (arr[0] === "mul") {
    return num1 * num2;
  }else if (arr[0] === "div") {
    return num1/num2;
  } else if (typeof(num1) !== "number" || typeof(num2) !== "number") {
    return undefined;
  } else {
    return undefined;
  }
}

console.log(calculator(["add", 20, 30]));
console.log(calculator(["sub", 20, 30]));
console.log(calculator(["mul", 20, 30]));
console.log(calculator(["div", 20, 30]));



// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = calculator;
