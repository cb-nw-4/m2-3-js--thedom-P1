// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  // add more tests here...
  expect(longestWord("You are a fool Harry Potter")).toBe("Potter");
  expect(longestWord("Daffodills and flufferbills")).toBe("flufferbills");
  expect(longestWord("")).toBe(null);
  expect(longestWord("aa bb cc dd")).toBe("dd");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
