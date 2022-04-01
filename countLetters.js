const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(words) {
  let result = {};
  for (let letter of words) {
    if (letter !== " ") {
      // if (result[letter]) {  // if it exists
      //   result[letter] += 1;
      // } else {
      //   result[letter] = 1;
      // }
      result[letter] ? result[letter] += 1 : result[letter] = 1;
    }
  }
  console.log(result);
};
countLetters("lighthouse in the house");

