// Filter Elements from Array

var filter = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};

// TESTING

arr = [10, 20, 30];

const fn = function greaterThan10(n) {
  return n > 10;
};

const fn2 = function firstIndex(n, i) {
  return i === 0;
};

console.log(filter(arr, fn2));
