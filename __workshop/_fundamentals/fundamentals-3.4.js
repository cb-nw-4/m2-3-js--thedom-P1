// Exercise 4
//
// Part 1 - Write
// ---------------
// Write a function that expects an array of numbers as input (e.g. [1, 2, 4, 12])
// and returns the sum of the numbers.
//
// - If the array contains any values that are not a number, the function should return undefined.

function sum(arr) {
  // Your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    } else {
      return undefined;
    }
  }
  return sum;
}
console.log(sum([8, 20, 5, 10, 50]))
console.log(sum([20, "fifteen", 15, 13]))
console.log(sum([10, 10, 450]))
console.log(sum(["this", "is", "a", "test"]))
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
