// const middle = require("../middle.js");
// const assertArraysEqual = require("../assertArraysEqual.js");

const assert = require('chai').assert;
const middle = require('../middle.js');

describe("#Middle", () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns [5, 6] for [1,2,3,4,5,6,7,8,9,10]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6]);
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});

/*
// Middle tests:
console.log("---------------------");
middle([1,2]); // returns []
middle([1,2,3]); // returns [2]
middle([1,2,3,4]); // returns [2, 4]
middle([1,2,3,4,5]); // returns [3]
middle([1,2,3,4,5,6]); // returns [3,4]
middle([1,2,3,4,5,6,7,8,9]); // returns [5]
middle([1,2,3,4,5,6,7,8,9,10]); // returns [5,6]
middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]); // returns [10,11]
console.log("---------------------");

// testing asserArraysEqual
console.log("---------------------");
assertArraysEqual([1,2],middle([1,2]),false); // False
assertArraysEqual([3],middle([1,2,3,4,5]),true); // True
assertArraysEqual([1,2,3,4,5,6],middle([1,2,3,4,5,6]),false); // True
console.log("---------------------");
*/