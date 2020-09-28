// We import (require) the function that we want to test.
const makeIntoTitle = require("../fundamentals-3.10");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 10", () => {
  expect(makeIntoTitle("a bb ccc dddd e ff ggg")).toBe(
    "A Bb Ccc Dddd E Ff Ggg"
  );
  // add more tests here...
});
expect(makeIntoTitle("one two three")).toBe("One Two Three");
expect(makeIntoTitle(" how About THiS oNe?")).toBe(" How About This One?");
expect(makeIntoTitle(" ALLCAPS ")).toBe(" Allcaps ");

// More info on jest expect: https://jestjs.io/docs/en/expect
