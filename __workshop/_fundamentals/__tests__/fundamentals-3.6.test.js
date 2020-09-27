// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["sub", 49, 12])).toBe(37);
  expect(calculator(["mul", 4, 10])).toBe(40);
  expect(calculator(["hello", 40, 11])).toBe(undefined);
  expect(calculator(["hello", "World", 11])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
