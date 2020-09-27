// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  // add more tests here...
  expect(repeat(["My cat's name is Tigris", 4])).toBe("My cat's name is TigrisMy cat's name is TigrisMy cat's name is TigrisMy cat's name is Tigris");
  expect(repeat(["foo", "4"])).toBe(undefined);
  expect(repeat(["ha", 10])).toBe("hahahahahahahahahaha");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
