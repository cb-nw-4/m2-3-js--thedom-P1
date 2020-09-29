// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([3,4,3,6,7,8])).toBe(31);
  expect(sum([4,3,'k',7,8])).toBe(undefined);
  expect(sum([5, 10, -3])).toBe(12);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
