const assertEqual = require("../assertEqual.js");
const head = require("../head.js");

// assertion check with arrays:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));