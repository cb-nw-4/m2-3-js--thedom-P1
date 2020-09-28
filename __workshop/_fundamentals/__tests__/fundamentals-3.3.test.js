// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(sum([3, 4])).toBe(7);
  // add more tests here...

  expect(sum([3, "a"])).toBe(undefined);
  expect(sum([3, 4, 6])).toBe(undefined);
  expect(sum([3])).toBe(undefined);
  expect(sum([])).toBe(undefined);
  expect(sum({num1: 1, num2: 3})).toBe(undefined);
  expect(sum("allo")).toBe(undefined);
  expect(sum([1, 4])).toBe(5);
});

// Run your test by typing yarn test fundamentals-3.3 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
