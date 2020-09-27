// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  expect(longestWord("")).toBe("");
  expect(longestWord("one two three four five")).toBe("three");
  expect(longestWord("aaa bbb ccc ddd eee")).toBe("eee");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
