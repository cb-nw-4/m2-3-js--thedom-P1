// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  // add more tests here...
  expect(reverseIt("12345")).toBe("54321");
  expect(reverseIt("Joel Bernstein")).toBe("nietsnreB leoJ");
  expect(reverseIt("Javascript")).toBe("tpircsavaJ");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
