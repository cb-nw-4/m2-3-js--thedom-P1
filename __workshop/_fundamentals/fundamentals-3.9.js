// Exercise 9
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string of multiple words and returns the longest word in the string.

// - If the input string is empty then return an empty string.
// - If multiple words have the same length, return the last one.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  // Place solution here
  if (str.length === 0) {
    return str;
  } else {
    let array = str.split(" ");
    let sortedArray = array.sort(function (longer, shorter) {
      return shorter.length - longer.length;
    });
    let longestWord = sortedArray[0];
    return longestWord;
  }
}
console.log(longestWord("a bb ccc dddd e ff ggg"));
console.log(longestWord("What is the longest word?"));
console.log(longestWord(""));
console.log(longestWord("It feels like a hot summer day"));
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
