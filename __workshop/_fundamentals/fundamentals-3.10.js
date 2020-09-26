// Exercise 10
// -------------
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns that string, capitalized.
// e.g. f("hello world"); // Hello World
// e.g. f("BACON BROCOLI"); // Bacon Brocoli

function makeIntoTitle(sentence) {
  // Your code here
  const splitStr = sentence.split(' ')

  const toUpper = splitStr.map(word => {
    const firstLetter = word[0].toUpperCase()
    // return firstWord
    const restWord = word.slice(1)
    const combined = firstLetter + restWord
    return combined
  })
  const changeType = toUpper.join(' ')
  return changeType
}

makeIntoTitle('hello from the other side')

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = makeIntoTitle;
