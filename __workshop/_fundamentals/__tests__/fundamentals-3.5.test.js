// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("Joel", 0)).toBe("J");
  expect(getLetterAtIndex("Hello World", 5)).toBe(undefined);
  expect(getLetterAtIndex([1, 2, 3], 0)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
