// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["mul", 4, 5])).toBe(20);
  expect(calculator(["sub", 10, 5])).toBe(5);
  expect(calculator(["div", 30, 3])).toBe(10);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
