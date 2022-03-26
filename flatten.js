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

// eslint-disable-next-line no-unused-vars
const assertArraysEqual = function(array1, array2, expected) {
  if (eqArrays(array1,array2) === expected) {
    console.log(`✅ Assertion Passed: ${array1,array2} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${array1,array2} !== ${expected}`);
  }
};

// eslint-disable-next-line no-unused-vars
const flatten = function(flattenArray) {
  let resultArray = [];
  for (let i = 0; i < flattenArray.length; i++) {
    if (Array.isArray(flattenArray[i])) {
      for (let x = 0; x < flattenArray[i].length; x++) {
        resultArray.push(flattenArray[i][x]);
      }
    } else {
      resultArray.push(flattenArray[i]);
    }
  }
  console.log(resultArray);
};