// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["sub", 15, 10])).toBe(5);
  expect(calculator(["mul", 6, 6])).toBe(36);
  expect(calculator(["div", 12, 4])).toBe(3);
  expect(calculator(["hello", 11, 27])).toBe(undefined);
  expect(calculator(["hello", "world", 0])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
