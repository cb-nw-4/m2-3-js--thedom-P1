// Exercise 5
// ------------
//
// Part 1 - Write
// ---------------
// Write a function that returns the letter at the specified position in the
// string.

// - If the string is not a string, return undefined.
// - If there is no letter in the provided index, return undefined.

function getLetterAtIndex(str, index) {
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  } else {
  array = str.split("");
  array.forEach(function(element, index) {
    console.log("index: " + index, element);
  })
  }
}

console.log(getLetterAtIndex("OkayWord"));
console.log(getLetterAtIndex(21))

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = getLetterAtIndex;
