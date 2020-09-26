// Exercise 10
// -------------
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns that string, capitalized.
// e.g. f("hello world"); // Hello World
// e.g. f("BACON BROCOLI"); // Bacon Brocoli

function makeIntoTitle(sentence) {
  let arr = sentence.split("");
  let newarr = [];
  

  newarr = arr.map((word,i) => {
    if (arr[i-1] === " ") return arr[i].toUpperCase();
    else return arr[i].toLowerCase();
  })
    // for (i=1;i<arr.length;i++){
    //   if (arr[i-1] === " ") newarr[i] = arr[i].toUpperCase();
    //   else newarr[i] = arr[i].toLowerCase();
    // }
  newarr[0] = arr[0].toUpperCase();
  return newarr.join("");
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = makeIntoTitle;
