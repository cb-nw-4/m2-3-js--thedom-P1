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
  // I add this condition even if it's not asked in the question to avoid the program to crash if we put something else then a string
  if (typeof str !== "string") {
    return undefined;
  }

  if(str.length === 0) {
    return "";
  }

  const wordArr = str.split(" ");
  let longWord = "";
  wordArr.forEach(word => {
    if (word.length >= longWord.length) {
      longWord = word;
    }    
  });
  
return longWord;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
