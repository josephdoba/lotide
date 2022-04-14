const { assert } = require("chai");
const eqArrays = require('./eqArrays.js');

// const assertArraysEqual = function(actual, expected) {
//   if (actual === true) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//     return true;
//   } else {
//     console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
//     return false;
//   }
// };

const assertArraysEqual = function(array1, array2, expected) {
  if (eqArrays(array1,array2) === expected) {
    console.log(`✅ Assertion Passed: ${eqArrays(array1,array2)} === ${expected}`);
    return true;
  } else {
    console.log(`🚨 Assertion Failed: ${eqArrays(array1,array2)} !== ${expected}`);
    return false;
  }
};

module.exports = assertArraysEqual;