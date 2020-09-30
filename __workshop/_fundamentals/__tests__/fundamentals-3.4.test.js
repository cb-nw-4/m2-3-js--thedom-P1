// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([11, 22, 33])).toBe(66);
  expect(sum([58, 47, 5])).toBe(110);
  expect(sum([2, 55, 7])).toBe(64);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
