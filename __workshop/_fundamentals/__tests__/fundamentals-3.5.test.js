// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("1A39", 1)).toBe("A");
  expect(getLetterAtIndex(["bacon","eggs"], 1)).toBe(undefined);
  expect(getLetterAtIndex("sas adf", 3)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
