// We import (require) the function that we want to test.
const lastCharacter = require("../fundamentals-3.2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(lastCharacter("max")).toBe("x");
  expect(lastCharacter(23232)).toBe(undefined);
  expect(lastCharacter("Once upon a time")).toBe("e");
  expect(lastCharacter(2039489534)).toBe(undefined);
  expect(lastCharacter("Bob's Burgers")).toBe("s");
  // add more tests here...
});

// Run your test by typing yarn test fundamentals-3.2 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
