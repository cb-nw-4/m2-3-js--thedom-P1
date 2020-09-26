// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([1, 2, 4, 12])).toBe(19);
  expect(sum([4, 5])).toBe(9);
  expect(sum([5])).toBe(5);
  expect(sum(["3", 4, 5])).toBe(undefined);
  expect(sum(["string", "true", 5])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
