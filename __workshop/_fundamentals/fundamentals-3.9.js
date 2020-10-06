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

function longestWord (str){
  const words = str.split(" ") // This break it up into an array of seperate strings ["hey", "hello", "morning"]
  let longestWord = ''
  
  words.forEach (function(word){ // word = morning
    if (word.length > longestWord.length){ // 7 > 5
      longestWord = word; // longest word = morning
    
    }
  
  })
return longestWord

}

const output = longestWord('hey hello morning'); // output = 'morning'

console.log('output',output); 

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
