//functions for tests:
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

const takeUntil = (array, callback) => {
  const resultArray = [];
  for (let i of array) {
    if (callback(i)) {
      return resultArray;
    } else {
      resultArray.push(i);
    }
  }
  return resultArray;
};

//test data:
const dataOne = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(dataOne, x => x < 0);

const dataTwo = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(dataTwo, x => x === ",");

console.log(results1);
console.log("-------");
console.log(results2);

/*
assertArraysEqual(dataOne, dataOne);
assertArraysEqual(dataOne, results1);
assertArraysEqual(dataTwo, results2);
*/

module.exports = takeUntil;
