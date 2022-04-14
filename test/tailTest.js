// const assertEqual = require("../assertEqual.js");
// const tail = require("../tail.js");

const assert = require('chai').assert;
const tail = require('../tail.js');
const eqArrays = require('../eqArrays.js');

describe("#tail", () => {
  it("returns [2,3,4,5] for [1,2,3,4,5]", () => {
    assert.deepEqual(tail([1,2,3,4,5],[2,3,4,5]));
    // eqArrays(tail([1,2,3,4,5]), [2,3,4,5]);
  });
});

/*
const words = ["Hello", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // the original array is being passed
assertEqual(tail(words).length, 2); // Tails uses the new array

const result = tail(["Hello","Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
*/