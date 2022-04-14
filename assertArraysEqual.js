const { assert } = require("chai");
const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(actual, expected) {
  if (actual === true) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertArraysEqual;