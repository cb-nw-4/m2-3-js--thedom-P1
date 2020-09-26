// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["div", 200, 40])).toBe(5);
  expect(calculator(["square", 150, 10])).toBe(undefined);
  expect(calculator(["sub", 250, 50])).toBe(200);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
