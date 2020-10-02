// We import (require) the function that we want to test.
const lastCharacter = require("../fundamentals-3.2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(lastCharacter("max")).toBe(x);
  expect(lastCharacter("hello")).toBe(o);
  expect(lastCharacter("be water")).toBe(r);
  expect(lastCharacter("abcdefghijklmnop")).toBe(p);
  expect(lastCharacter("This is a test case.")).toBe(e);
  expect(lastCharacter("")).toBe(undefined);
});

// Run your test by typing yarn test fundamentals-3.2 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
