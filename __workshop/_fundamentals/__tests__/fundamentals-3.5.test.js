// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...

  expect(getLetterAtIndex(123, 2)).toBe(undefined);
  expect(getLetterAtIndex(["hello"], 2)).toBe(undefined);
  expect(getLetterAtIndex("", 0)).toBe(undefined);
  expect(getLetterAtIndex("bacon", 4)).toBe("n");
  expect(getLetterAtIndex("bacon", 5)).toBe(undefined);
  expect(getLetterAtIndex("I am me", 0)).toBe("I");
  expect(getLetterAtIndex("I am me", 1)).toBe(" ");
  expect(getLetterAtIndex("I am me", -1)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
