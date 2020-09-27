// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex(5, 2)).toBe(undefined);
  expect(getLetterAtIndex("Louis-Jacques-Mandé Daguerre", 50)).toBe(undefined);
  expect(getLetterAtIndex("Andy Warhol", 2)).toBe("d");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
