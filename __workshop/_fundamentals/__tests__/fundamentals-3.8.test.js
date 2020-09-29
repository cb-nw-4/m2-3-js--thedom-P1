// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  // add more tests here...
  expect(reverseIt("construction")).toBe("noitcurtsnoc");
  expect(reverseIt("there are a lot of bloody cars here")).toBe("ereh srac ydoolb fo tol a era ereht");
  expect(reverseIt("chappy chatty chap")).toBe("pahc yttahc yppahc");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
