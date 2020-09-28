// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  // add more tests here...
  expect(repeat(["foo", 1])).toBe("foo");
  expect(repeat(["foo", 0])).toBe("");
  expect(repeat(["foo", -1])).toBe("");
  expect(repeat(["foo", "a"])).toBe(undefined);
  expect(repeat([34, 4])).toBe(undefined);
  expect(repeat("hello")).toBe(undefined);
  expect(repeat(["foo", 1, 3])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
