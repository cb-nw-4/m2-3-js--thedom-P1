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
    if (typeof(sentence) === 'string') {
        let arrStr = sentence.split(" ")

        let arrCapStr = [];

        arrStr.forEach(element => {
            arrCapStr.push(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
        });


        return sentence = arrCapStr.join(' ');
    } else {
        return undefined;
    }


}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = makeIntoTitle;