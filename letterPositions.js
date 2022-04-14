const eqArrays = function(arr1, arr2) {
  let result = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*

Method one:
const letterPositions = function(sentence) {
  let results = {};
  // use for..of to assign the keys to the results array, and create each key with an empty array
  let position = 0;
  for (let letter of sentence) {
    // console.log(letter);
    if (letter !== " ") {
      if (results[letter]) {  // if key exists
        results[letter].push(position);
      } else { // if it doesn't exist, create the blank array and increment the position
        results[letter] = [];
        results[letter].push(position);
      }
    }
    position++;
  }
  */

// Method two:
const letterPositions = function(sentence) {
  let results = {};
  // use for..of to assign the keys to the results array, and create each key with an empty array
  for (let i = 0; i < sentence.length; i++) { // with an for..in loop, you can get the key out of here
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {  // if key exists
        results[letter].push(i);
      } else { // if it doesn't exist, create the blank array and increment the position
        results[letter] = [];
        results[letter].push(i);
      }
    }
  }
  console.log(results);
  return results;
};

/*
assertArraysEqual(letterPositions("hello"), [1]); // write the function first.. this looks at the key "e" .. should return true
*/

/*
letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").l, [2,3], true);
*/

module.exports = letterPositions;