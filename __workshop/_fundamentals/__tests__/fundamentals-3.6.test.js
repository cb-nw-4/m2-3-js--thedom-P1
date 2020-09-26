// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["sub", 10, 15])).toBe(5);
  expect(calculator(["mul", 10, 15])).toBe(150);
  expect(calculator(["div", 10, 2])).toBe(5);
  expect(calculator(["add", 1, 15])).toBe(16);
  expect(calculator([12, 10, 15])).toBe(undefined);
  expect(calculator(["add", "string", 15])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
