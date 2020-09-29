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
  array = str.split("");
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  } else if (array.length < index){
  return undefined;
  } else {
    // array = str.split("");
  return array[index];
  }
}

console.log(getLetterAtIndex("OkayWord", 10));
console.log(getLetterAtIndex("OkayWord", 5));
console.log(getLetterAtIndex("OkayWord", 5));


// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = getLetterAtIndex;
