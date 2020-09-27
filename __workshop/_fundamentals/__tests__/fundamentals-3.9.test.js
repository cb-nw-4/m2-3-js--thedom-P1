// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  // add more tests here...
  expect(longestWord("the joke cars")).toBe("cars");
  expect(longestWord("hello old friends")).toBe("friends");
  expect(longestWord("aaa bbb ccc ddd")).toBe("ddd");

});

// More info on jest expect: https://jestjs.io/docs/en/expect
