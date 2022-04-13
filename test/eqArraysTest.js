const assertEqual = require("../assertEqual.js");
const eqArrays = require("../eqArrays.js");

// test code:
const myArray1 = [1,2,3];
const myArray2 = [1,2,3];
const myArray3 = [2,3,4];
const myArray4 = [1,2,3,4];

assertEqual(eqArrays(myArray1, myArray2), true); // True
assertEqual(eqArrays(myArray1, myArray3), false); // False
assertEqual(eqArrays(myArray1, myArray4), false); // False