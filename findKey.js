const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

/*
//test cases:
console.log(findKey(testObject, x => x.stars === 2)); // noma
findKey(testObject, x => x.stars === 2);
console.log(findKey(testObject, x => x.stars === 7)); // undefined
findKey(testObject, x => x.stars === 7);

// assertion tests:
assertEqual(findKey(testObject, x => x.stars === 2), "noma"); // passes
assertEqual(findKey(testObject, x => x.stars === 3), "noma"); // fails
assertEqual(findKey(testObject, x => x.stars === 3), "Akaleri"); // passes
assertEqual(findKey(testObject, x => x.stars === 4), undefined); // passes
*/
module.exports = findKey;