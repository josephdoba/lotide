const assertArraysEqual = require('../assertArraysEqual.js');
// const eqArrays = require("../eqArrays.js");

assertArraysEqual([1,2,3], [1,2,3], true); // True
assertArraysEqual([2,3,4], [2,3,4], true); // True
assertArraysEqual([1,2,3], [2,3,4], false); // False