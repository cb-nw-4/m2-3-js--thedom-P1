// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(sum([3, 4])).toBe(7);
  // add more tests here...
  expect(sum([2, 4, 7])).toBe(undefined);
  expect(sum(["Aya", "Sato"])).toBe(undefined);
  expect(sum([49, 90])).toBe(139);
});

// Run your test by typing yarn test fundamentals-3.3 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
