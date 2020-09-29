// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  // add more tests here...
  expect(reverseIt("12345")).toBe("54321");
  expect(reverseIt("")).toBe(undefined);
  expect(reverseIt("nalgene")).toBe("eneglan");
  expect(reverseIt("nal gene")).toBe("eneg lan");
  expect(reverseIt([1,2])).toBe(undefined);
  expect(reverseIt("y")).toBe("y");

});

// More info on jest expect: https://jestjs.io/docs/en/expect
