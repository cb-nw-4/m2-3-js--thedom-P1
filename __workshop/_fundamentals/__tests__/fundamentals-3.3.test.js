// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(sum([3, 4])).toBe(7);
  expect(sum([3, 8, 20, 15])).toBe(undefined);
  expect(sum([119, 2000])).toBe(2119);
  expect(sum([19, "twenty"])).toBe(undefined);

  // add more tests here...
});

// Run your test by typing yarn test fundamentals-3.3 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
