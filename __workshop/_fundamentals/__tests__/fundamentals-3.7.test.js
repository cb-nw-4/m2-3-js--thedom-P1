// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  // add more tests here...
  expect(repeat(["ends", 2])).toBe("endsends");
  expect(repeat(["are", 4])).toBe("areareareare");
  expect(repeat(["is ", 5])).toBe("is is is is is ");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
