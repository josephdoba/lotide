const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");


// Middle tests:
console.log("---------------------");
middle([1,2]); // returns []
middle([1,2,3]); // returns [2]
middle([1,2,3,4]); // returns [2, 4]
middle([1,2,3,4,5]); // returns [3]
middle([1,2,3,4,5,6]); // returns [3,4]
middle([1,2,3,4,5,6,7,8,9]); // returns [5]
middle([1,2,3,4,5,6,7,8,9,10]); // returns [5,6]
middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]); // returns [10,11]
console.log("---------------------");

// testing asserArraysEqual
console.log("---------------------");
assertArraysEqual([1,2],middle([1,2]),false); // False
assertArraysEqual([3],middle([1,2,3,4,5]),true); // True
assertArraysEqual([1,2,3,4,5,6],middle([1,2,3,4,5,6]),false); // True
console.log("---------------------");