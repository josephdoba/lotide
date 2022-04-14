const assertEqual = require("./assertEqual.js");

// should return the "tail" of the array: everything EXCEPT for the first item (head) of the provided array
// Referenced from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const tail = function(array) {
  let tailArray = array.slice(1,array.length);
  console.log(tailArray);
  return tailArray;
};

module.exports = tail;