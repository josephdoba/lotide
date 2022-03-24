const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// should return the "tail" of the array: everything EXCEPT for the first item (head) of the provided array

// Referenced from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const tail = function(array) {
  let tailArray = array.slice(1,array.length);
  console.log(tailArray);
  return tailArray;
};

/*
assertEqual("illegal", "Illegal");
assertEqual("Apples","Oranges");
assertEqual(10,10);
assertEqual(30,70);
assertEqual(true, true);
*/
/*
const result = tail(["Hello","Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
*/

const words = ["Hello", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3); // the original array is being passed
assertEqual(tail(words).length, 2); // Tails uses the new array