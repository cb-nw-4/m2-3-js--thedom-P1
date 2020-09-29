// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  expect(longestWord("a bb ccc")).toBe("ccc");
  expect(longestWord("1111 22 3")).toBe("1111");
  expect(longestWord("1111 2222 3333")).toBe("3333");
  expect(longestWord("")).toBe("");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
