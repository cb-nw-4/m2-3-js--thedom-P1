// Exercise 8
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns the string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".

function reverseIt(str) {
  // Your code here
  let splitStr = str.split("");
  let reversed = splitStr.reverse("");
  let reverseStr = reversed.join("");
  return reverseStr; 
}
console.log(reverseIt("ti esrever dna ti pilF"))
console.log(reverseIt("ti rehpiced ot evah uoy dna edoc terces a si sihT"))
console.log(reverseIt("SDRAWKCAB DNA SDRAWROF"))
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = reverseIt;
