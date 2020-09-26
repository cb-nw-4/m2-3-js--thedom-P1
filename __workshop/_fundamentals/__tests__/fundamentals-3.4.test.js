// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...

  expect(sum([3])).toBe(3);
  expect(sum([3, "1", 5])).toBe(undefined);
  expect(sum(["c", "a", "b"])).toBe(undefined);
  expect(sum([1, 6, 8])).toBe(15);
  expect(sum([])).toBe(undefined);
  expect(sum(23)).toBe(undefined);

});

// More info on jest expect: https://jestjs.io/docs/en/expect
