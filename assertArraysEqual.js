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

const assertArraysEqual = function(array1, array2, expected) {
  if (eqArrays(array1,array2) === expected) {
    console.log(`✅ Assertion Passed: ${array1,array2} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${array1,array2} !== ${expected}`);
  }
};