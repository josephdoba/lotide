const assertArraysEqual = require('../assertArraysEqual.js');
const eqArrays = require("../eqArrays.js");

assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true); // True
assertArraysEqual(eqArrays([2,3,4], [2,3,4]), true); // True
assertArraysEqual(eqArrays([1,2,3], [2,3,4]), true); // False