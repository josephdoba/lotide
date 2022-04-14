// Helper Lotide codes for testing:
const eqArrays = function(arr1, arr2) {
  let result = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = true;
      } else if (arr1[i] !== arr2[i]) {
        result = false;
        break;
      } else {
        break;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// our map function needs to take two arguments:
// 1: An Array to map
// 2: a callback function

// sample words:
const words = ["ground", "control", "to", "major", "tom"];

//define map
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
/*
// Write out three different ways to use map
const results1 = map(words, word => word[0]); // only returns the first character of each element into an array
const results2 = map(words, word => word.split()); // creates nested arrays for each element.
const results3 = map(words, word => word.concat("-" + word.length)); // add the length of the characters to the end of the element.

// eqArrays tests:
console.log(eqArrays(words,results1));
console.log(eqArrays(words,results2));
console.log(eqArrays(words,results3));

// assertArraysEqual tests:
console.log(assertArraysEqual(words,words));
console.log(assertArraysEqual(words,results1));
console.log(assertArraysEqual(words,results2));
console.log(assertArraysEqual(words,results3));
*/

module.exports = map;

