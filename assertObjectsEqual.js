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

const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    console.log("Returns false the objects do not match");
    return false;
  }
  // if same amount of keys, compare each key to the values of each one:
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) false;
    console.log(obj1[key]);
    if (Array.isArray(obj1[key])) {
      for (let element of obj1[key]) {
        if (!eqArrays(obj1[key], obj2[key])) return false;
      }
    }
  }
  console.log(`Object one: ${obj1} and Object two: ${obj2} are a match!`);
  return true;
};

//test obj declarations:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// tests with arrays:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


const assertObjectsEqual = (actual, expected) => {
  // according to nodes' website, inspect returns a string'd version of an object, easier for debugging. https://nodejs.org/api/util.html#utilinspectobject-options
  // we import the module "util" from node, and assign the function to a variable below:
  const inspect = require('util').inspect;

  eqObjects(actual, expected) ? console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🚨 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  console.log("----------------------------------");
};

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);