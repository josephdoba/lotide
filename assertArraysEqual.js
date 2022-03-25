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
  console.log(`The array assertion returned: ${result}`);
  return result;
};

eqArrays([1,2,3],[1,2,3]);