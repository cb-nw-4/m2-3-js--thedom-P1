// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("This is a string", 5)).toBe("i")
  expect(getLetterAtIndex(["this", "is", "a", "test"], 3)).toBe(undefined)
  expect(getLetterAtIndex("Weekends are the best", 7)).toBe("s")
});

// More info on jest expect: https://jestjs.io/docs/en/expect
