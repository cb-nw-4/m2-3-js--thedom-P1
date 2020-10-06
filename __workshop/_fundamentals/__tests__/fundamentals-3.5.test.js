// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  expect(getLetterAtIndex("Bharat", 3)).toBe("r");
  expect(getLetterAtIndex("Hello", 1)).toBe("e");


  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
