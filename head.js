const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(firstItem) {
  return firstItem[0];
};


// assertion checks with simple data types:
assertEqual("illegal", "Illegal");
assertEqual("Apples","Oranges");
assertEqual(10,10);
assertEqual(30,70);
assertEqual(true, true);

// assertion check with arrays:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
