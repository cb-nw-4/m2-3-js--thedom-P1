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
  let words = str.split(" ");
  let maxWordLength = 0;
  let word = null;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxWordLength) {
      maxWordLength = words[i].length;
      word = words[i];
    }
  }
  return word;

  // var words = str.split(" ");
  // var longest = 0;
  // var word = null;

  // words.forEach(function(str) {
  //       if (longest < str.length) {
  //           longest = str.length;
  //           word = str;
  //       }
  //   });
  //   return word;
}

console.log(longestWord("A decently long string"))

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
