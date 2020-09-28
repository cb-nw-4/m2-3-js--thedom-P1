// Exercise 4
//
// Part 1 - Write
// ---------------
// Write a function that expects an array of numbers as input (e.g. [1, 2, 4, 12])
// and returns the sum of the numbers.
//
// - If the array contains any values that are not a number, the function should return undefined.

function sum(arr) {
  // allNumbers = arr.every(function(n) {
  //   if (element = typeof(n) == "number") {
  //     return true
  //   } else {
  //     return undefined;
  //   }
  // })
  // return allNumbers;

  // return allNumbers = arr.every(function(n) {
  //   if (element = typeof(n) == "number") {
  //     return arr.reduce(function(prev, next) {
  //       return prev + next;
  //     }, 0)
  //   } else {
  //     return undefined;
  //   }
  // })
  

  // return arr.reduce(function(prev, next) {
  //   if (arr.every(function(element) {
  //     typeof (element) == "numbers";
  //   }))
  //     return prev + next;
  //   })

  // return arr.reduce(function(prev, next) {
  //   return prev + next;
  // })
  let sum = 0;

  if (arr.every(function(element) {
    typeof(element === "number")
  })) {
    for (var i = 0; i < arr.length; i++) {
      return sum += arr[i];
    }
    // return sum;
  } else {
    return undefined;
  }
}


console.log(sum([2, 3, 5, 6]));
console.log(sum([6, 8, 9, "Hola"]));

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
