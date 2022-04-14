const array1 = [1,2,3,4];

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


// write a function that takes a source array, and an items to remove array.
// The without function should be returning a new array and not modify the original array that is passed in

const without = function(source,itemsToRemove) {
  let resultArray = [];
  if (!eqArrays(source,itemsToRemove)) {
    for (let i = 0; i < source.length; i++) {
      let isMatching = false;

      for (let x = 0; x < itemsToRemove.length; x++) {
        if (source[i] === itemsToRemove[x]) {
          console.log(`We want to remove ${itemsToRemove[x]} from the array ${source[i]}`);
          isMatching = true;
        }
      }
      if (!isMatching) {
        resultArray.push(source[i]);
      }

    }
  }
  console.log(resultArray);
};
/*
without([1,2,3],[2,4,5,6]);
without(["Hello","lighthouse","labs"],["lighthouse"]);
without(array1,[3]);
*/

module.exports = without;
