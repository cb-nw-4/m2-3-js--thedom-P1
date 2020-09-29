// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum(["dog", "cat"])).toBe(undefined);
  expect(sum([2, 4, 6, 8])).toBe(20);
  expect(sum(["dog", 2, "cat", 4])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
