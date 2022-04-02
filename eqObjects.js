const assertEqual = function(actual, expected) {
  // refactored:
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  // old code:
/*
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
    */
};

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
//test obj declarations:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// tests with arrays:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const eqObjects = function(obj1, obj2) {
  // define variables with just the keys
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  // determine the length of the keys
  if (obj1Keys.length !== obj2Keys.length) {
    console.log("Returns false the objects do not match");
    return false;
  }

  // if same amount of keys, compare each key to the values of each one:
  for (const key in obj1) {
    // refactor:
    if (obj1[key] !== obj2[key]) false;
    // old code:
    // if (obj1[key] !== obj2[key]) {
    //   console.log("These do not match - Returning False");
    //   return false;
    // }


    console.log(obj1[key]);
    if (Array.isArray(obj1[key])) {
      for (let element of obj1[key]) {
        // console.log(element);
        if (!eqArrays(obj1[key], obj2[key])) return false;
      }
    }
  }

  console.log(`Object one: ${obj1} and Object two: ${obj2} are a match!`);
  return true;
};

// assertEqual(eqObjects(ab, ba));
// eqObjects(ab, ba);
// eqObjects(ab, abc); // returns false because they don't share lengths. expected.

//array tests:
console.log(eqObjects(cd, dc)); // returns true
console.log(eqObjects(cd, cd2)); // returns false
// eqObjects(cd, cd2); // => false
