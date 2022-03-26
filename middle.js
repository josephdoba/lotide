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
const middle = function(array) {
  let resultMiddle = [];
  if (array.length >= 3) {
    if (array.length % 2 === 1) {
      resultMiddle.push(array[Math.floor(array.length / 2)]);
    } else {
      resultMiddle.push(array[Math.floor((array.length / 2) - 1)]);
      resultMiddle.push(array[Math.ceil(array.length / 2)]);
    }
  } else {
    console.log(`The Array has less than 3 elements, and has a length of: ${array.length}`);
    return resultMiddle;
  }
  console.log(resultMiddle);
  return resultMiddle;
};

// tests used:
/*
middle([1,2]); // returns []
middle([1,2,3]); // returns [2]
middle([1,2,3,4]); // returns [2, 4]
middle([1,2,3,4,5]); // returns [3]
middle([1,2,3,4,5,6]); // returns [3,4]
middle([1,2,3,4,5,6,7,8,9]); // returns [5]
middle([1,2,3,4,5,6,7,8,9,10]); // returns [5,6]
middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]); // returns [10,11]

// testing asserArraysEqual
assertArraysEqual([1,2],middle([1,2]),true);
assertArraysEqual([3],middle([1,2,3,4,5]),true);
assertArraysEqual([1,2,3,4,5,6],middle([1,2,3,4,5,6]),false);
*/
