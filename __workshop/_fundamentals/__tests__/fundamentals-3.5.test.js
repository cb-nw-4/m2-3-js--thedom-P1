// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("anonymous", 3)).toBe("n");
  expect(getLetterAtIndex("variables", 1)).toBe("a");
  expect(getLetterAtIndex("using", 4)).toBe("g");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
