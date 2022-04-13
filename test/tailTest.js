const assertEqual = require("../assertEqual.js");
const tail = require("../tail.js");

const words = ["Hello", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // the original array is being passed
assertEqual(tail(words).length, 2); // Tails uses the new array

const result = tail(["Hello","Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");