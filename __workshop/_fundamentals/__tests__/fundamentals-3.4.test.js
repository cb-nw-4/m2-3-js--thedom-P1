// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  expect(sum([8, 20, 5, 10, 50])).toBe(93);
  expect(sum([20, "fifteen", 15, 13])).toBe(undefined);
  expect(sum([10, 10, 450])).toBe(470);
  expect(sum(["this", "is", "a", "test"])).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
