// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  // add more tests here...
  expect(reverseIt("ti esrever dna ti pilF")).toBe("Flip it and reverse it")
  expect(reverseIt("ti rehpiced ot evah uoy dna edoc terces a si sihT")).toBe("This is a secret code and you have to decipher it")
  expect(reverseIt("SDRAWKCAB DNA SDRAWROF")).toBe("FORWARDS AND BACKWARDS")
});

// More info on jest expect: https://jestjs.io/docs/en/expect
