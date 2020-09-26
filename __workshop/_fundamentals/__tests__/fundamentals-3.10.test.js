// We import (require) the function that we want to test.
const makeIntoTitle = require("../fundamentals-3.10");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 10", () => {
  expect(makeIntoTitle("a bb ccc dddd e ff ggg")).toBe(
    "A Bb Ccc Dddd E Ff Ggg"
  );
  // add more tests here...
  expect(makeIntoTitle("this is a test title")).toBe("This Is A Test Title");
  expect(makeIntoTitle("parks and recreation")).toBe("Parks And Recreation");
  expect(makeIntoTitle("rick and morty")).toBe("Rick And Morty");
  expect(makeIntoTitle("bob's burgers")).toBe("Bob's Burgers");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
