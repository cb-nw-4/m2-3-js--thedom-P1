// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex(5678, 2)).toBe(undefined);
  expect(getLetterAtIndex("bacon", 4)).toBe("n");
  expect(getLetterAtIndex("bacon", 10)).toBe(undefined);
  expect(getLetterAtIndex("b", 0)).toBe("b");
  expect(getLetterAtIndex("baconbaconbacon", 7)).toBe("c");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
