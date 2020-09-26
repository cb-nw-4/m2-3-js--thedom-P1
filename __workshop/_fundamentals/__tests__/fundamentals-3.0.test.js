// We import (require) the function that we want to test.
const strLength = require("../fundamentals-3.0");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 0", function () {
  expect(strLength("max")).toBe(3);
  // add more tests here...
  expect(strLength("abcdefghijklmnop")).toBe(16);
  expect(strLength("This is a test case.")).toBe(20);
  expect(strLength("")).toBe(undefined);
  expect(strLength(256)).toBe(undefined);
  expect(strLength(["abcdefghijklmnop"])).toBe(undefined);
  expect(strLength("Hi.")).toBe(3);
  expect(strLength("   ")).toBe(3);
  expect(strLength("test 123")).toBe(8);
});

// Run your test by typing yarn test fundamentals-3.1 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
