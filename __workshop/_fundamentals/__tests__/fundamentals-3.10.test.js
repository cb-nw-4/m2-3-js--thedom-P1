// We import (require) the function that we want to test.
const makeIntoTitle = require("../fundamentals-3.10");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 10", () => {
  expect(makeIntoTitle("a bb ccc dddd e ff ggg")).toBe(
    "A Bb Ccc Dddd E Ff Ggg"
  );
  // add more tests here...
  expect(makeIntoTitle("MY NAME IS AYA SATO.")).toBe(
    "My Name Is Aya Sato."
  );
  expect(makeIntoTitle("to be, or not to be, that is the question")).toBe(
    "To Be, Or Not To Be, That Is The Question"
  );
  expect(makeIntoTitle(9999)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
