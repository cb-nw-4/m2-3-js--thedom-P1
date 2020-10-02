// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum(["3", 4, 5])).toBe(undefined);
  expect(sum([3, 4, 5])).toBe(12);
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum(["string", 4, 5])).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
