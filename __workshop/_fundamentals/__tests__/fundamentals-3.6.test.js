// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  expect(calculator(["sub", 20, 10])).toBe(10);
  expect(calculator(["mul", 5, 5])).toBe(25);
  expect(calculator(["div", 10, 2])).toBe(5);
  expect(calculator(["boo", 10, 15])).toBe(undefined);
  expect(calculator(["add", 10])).toBe(undefined);
  expect(calculator(["add", 'ten', 15])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
