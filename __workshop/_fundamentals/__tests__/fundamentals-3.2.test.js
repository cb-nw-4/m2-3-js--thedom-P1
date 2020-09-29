// We import (require) the function that we want to test.
const lastCharacter = require("../fundamentals-3.2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(lastCharacter("max")).toBe("x");
  expect(lastCharacter(23232)).toBe(undefined);
  // add more tests here...
  expect(lastCharacter("heart<3")).toBe("3");
  expect(lastCharacter("")).toBe(undefined);
  expect(lastCharacter("space ")).toBe(" ");  
});

// Run your test by typing yarn test fundamentals-3.2 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
