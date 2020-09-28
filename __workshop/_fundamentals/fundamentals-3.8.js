// Exercise 8
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns the string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".

function reverseIt(str) {
  // I add this condition even if it's not asked in the question to avoid the program to crash if we put something else then a string
  if (typeof str !== "string") {
    return undefined;
  }
  return str.split("").reverse().join("");
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = reverseIt;
