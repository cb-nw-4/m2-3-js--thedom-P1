// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([100, 100, "hello"])).toBe(undefined);
  expect(sum([1, 2, 3, 4])).toBe(10);
  expect(sum([100])).toBe(100);
  // expect(sum([NaN, 100])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
