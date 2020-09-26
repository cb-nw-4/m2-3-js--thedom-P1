// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  expect(repeat(["boo", 4])).toBe("booboobooboo");
  expect(repeat([4, 4])).toBe(undefined);
  expect(repeat(["foo", -3])).toBe(undefined);
  expect(repeat(["foo", 0])).toBe(undefined);
  expect(repeat(["foo", "foo"])).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
