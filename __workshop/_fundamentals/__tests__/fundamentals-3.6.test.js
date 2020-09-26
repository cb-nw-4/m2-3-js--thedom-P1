// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  expect(calculator(["sub", 15, 10])).toBe(5);
  expect(calculator(["mul", 15, 10])).toBe(150);
  expect(calculator(["div", 30, 10])).toBe(3);
  expect(calculator(["poop", 30, 10])).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
