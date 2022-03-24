const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("illegal", "Illegal");
assertEqual("Apples","Oranges");
assertEqual(10,10);
assertEqual(30,70);
assertEqual(true, true);